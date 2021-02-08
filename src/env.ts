/**
 * The JWT secret
 *
 * @env JWT_SECRET
 */
const jwtSecret = () => {
  if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not set!");
  return process.env.JWT_SECRET;
};

export { jwtSecret };
