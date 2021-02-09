const postQuerySchema = {
  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: {
        type: "string",
      },
    },
  },
};

interface PostQuerySchema {
  Params: {
    id: string;
  };
}

export { postQuerySchema, PostQuerySchema };
