import { BlogCtrl } from "..";
import { withUser } from "../helpers/authHelper";

const UserController: BlogCtrl = async (fastify, { db }) => {
  fastify.get("/me", async (req, res) =>
    withUser(req, res, db, async ({ dtoUser }) => res.send({ user: dtoUser }))
  );
};

export const routePrefix = "/user";

export default UserController;
