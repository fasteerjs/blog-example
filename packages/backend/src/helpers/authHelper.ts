import { FastifyRequest, FastifyReply } from "fastify";
import { PrismaClient, User, UserRole } from "@prisma/client";
import * as jwt from "jsonwebtoken";
import { Error, error, Succces, success } from "./responseHelper";

export interface WithUserResult<TUser extends User = User> {
  payload: { userId: string };
  user: TUser;
  dtoUser: {
    id: TUser["id"];
    username: TUser["username"];
  };
}

// All errors that can occur when using withUser()
export const WithUserErrors = {
  MISSING_TOKEN: {
    kind: "user_input",
    message: "Missing or invalid authorization token"
  },
  ACCOUNT_INACTIVE: {
    kind: "forbidden",
    message: "Account that belongs to this token is inactive"
  },
  ACCOUNT_UNAUTHORIZED: {
    kind: "unauthorized",
    message: "You are not authorized to perform this action"
  }
};

export const useUser = async (
  req: FastifyRequest,
  db: PrismaClient,
  verifyRole?: UserRole
): Promise<
  | Succces<WithUserResult>
  | Error<typeof WithUserErrors[keyof typeof WithUserErrors]>
> => {
  const token = req.headers["authorization"];
  if (!token || !String(token).startsWith("Bearer "))
    return error(WithUserErrors.MISSING_TOKEN);

  const payload = jwt.verify(
    token.replace("Bearer ", ""),
    process.env.JWT_SECRET ?? "wellfuckyou"
  ) as WithUserResult["payload"];

  if (!payload) return error(WithUserErrors.MISSING_TOKEN);

  const user = await db.user.findUnique({
    where: { id: payload.userId }
  });
  if (!user) return error(WithUserErrors.ACCOUNT_INACTIVE);

  if (verifyRole && user.role !== verifyRole)
    return error(WithUserErrors.ACCOUNT_UNAUTHORIZED);

  return success({
    payload,
    user,
    dtoUser: {
      id: user.id,
      username: user.username
    }
  });
};

export const withUser = async (
  req: FastifyRequest,
  res: FastifyReply,
  db: PrismaClient,
  fn: (result: WithUserResult) => Promise<any>,
  verifyRole?: UserRole
) => {
  const userCtx = await useUser(req, db, verifyRole);
  if (!userCtx.success || !userCtx.data) return res.send(userCtx);

  return await fn(userCtx.data);
};
