import { BlogCtrl } from "..";
import { hashSync, compareSync } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { error, success } from "../helpers/responseHelper";
import authSchema, { AuthSchema } from "../schemas/auth";

const AuthController: BlogCtrl = async (fastify, { db }) => {
  fastify.post<AuthSchema>(
    "/login",
    { schema: authSchema },
    async ({ body: { data } }, res) => {
      const user = await db.user.findFirst({
        where: {
          username: data.username,
        },
      });

      if (!user)
        return res.send(
          error({
            kind: "user_input",
            message: "User not found.",
          })
        );

      if (!compareSync(data.password, user.password))
        return res.send(
          error({
            kind: "user_input",
            message: "Password is incorrect.",
          })
        );

      const token = sign({ userId: user.id }, process.env.JWT_SECRET!);

      res.send(success({ token }));
    }
  );

  fastify.put<AuthSchema>(
    "/register",
    { schema: authSchema },
    async ({ body: { data } }, res) => {
      if (
        await db.user.findFirst({
          where: { username: data.username },
        })
      )
        return res.send(
          error({
            kind: "user_input",
            message: "Username is already taken.",
          })
        );

      await db.user.create({
        data: {
          username: data.username,
          password: hashSync(data.password),
        },
      });

      res.send(success());
    }
  );
};

export const routePrefix = "/auth";

export default AuthController;
