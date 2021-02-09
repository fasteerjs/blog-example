/**
 * This schema applies for both Login and Register,
 * that's why it is unified.
 */
const authSchema = {
  body: {
    type: "object",
    required: ["data"],
    properties: {
      data: {
        type: "object",
        required: ["username", "password"],
        properties: {
          username: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
    },
  },
};

interface AuthSchema {
  Body: {
    data: {
      username: string;
      password: string;
    };
  };
}

export { AuthSchema, authSchema };

export default authSchema;
