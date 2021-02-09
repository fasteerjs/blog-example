import { PrismaClient } from "@prisma/client";

export const countPostPages = async (db: PrismaClient, perPage: number) => {
  const posts = await db.post.count();

  if (!posts || posts <= 0) return 0;
  if (posts < 1) return 0;
  if (posts < perPage) return 1;

  return Math.ceil(posts / perPage);
};
