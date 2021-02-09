interface PaginatedQuerySchema {
  Querystring: {
    perPage: number;
    page: number;
  };
}

const paginatedQuerySchema = {
  querystring: {
    required: ["perPage"],
    properties: {
      perPage: {
        type: "string"
      },
      page: {
        type: "string"
      }
    }
  }
};

export { PaginatedQuerySchema, paginatedQuerySchema };
