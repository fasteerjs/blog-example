import slugify from "slugify";
import { BlogCtrl } from "..";
import { withUser } from "../helpers/authHelper";
import { error, success } from "../helpers/responseHelper";
import {
  postCreateSchema,
  PostCreateSchema,
  postQuerySchema,
  PostQuerySchema,
} from "../schemas/post";

const PostController: BlogCtrl = async (fastify, { db }) => {
  fastify.get<PostQuerySchema>(
    "/byId/:id",
    { schema: postQuerySchema },
    async (req, res) => {
      const post = await db.post.findUnique({
        where: {
          id: req.params.id,
        },
        include: {
          author: {
            select: {
              username: true,
            },
          },
        },
      });

      if (!post)
        return res.send(
          error({
            kind: "user_input",
            message: "Post not found.",
          })
        );

      res.send(success({ post }));
    }
  );

  fastify.get<PostQuerySchema>(
    "/slug/:id",
    { schema: postQuerySchema },
    async (req, res) => {
      const post = await db.post.findFirst({
        where: {
          slug: req.params.id,
        },
        include: {
          author: {
            select: {
              username: true,
            },
          },
        },
      });

      if (!post)
        return res.send(
          error({
            kind: "user_input",
            message: "Post not found.",
          })
        );

      res.send(success({ post }));
    }
  );

  fastify.post<PostCreateSchema>(
    "/create",
    { schema: postCreateSchema },
    async (req, res) =>
      withUser(req, res, db, async ({ user }) => {
        const post = await db.post.create({
          data: {
            ...req.body.data,
            authorId: user.id,
            slug: slugify(req.body.data.title, { lower: true }),
          },
        });

        res.send(success({ post }));
      })
  );
};

export const routePrefix = "/post";

export default PostController;
