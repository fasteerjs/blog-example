import { Prisma } from "@prisma/client";

const postCreateSchema = {
  body: {
    type: "object",
    required: ["data"],
    properties: {
      data: {
        type: "object",
        required: ["title", "content"],
        properties: {
          title: {
            type: "string",
          },
          slug: {
            type: "string",
          },
          content: {
            type: "string",
          },
        },
      },
    },
  },
};

interface PostCreateSchema {
  Body: {
    data: Omit<
      Prisma.PostCreateInput,
      "authorId" | "author" | "createdAt" | "slug" | "id"
    > & { slug?: string };
  };
}

export { postCreateSchema, PostCreateSchema };
