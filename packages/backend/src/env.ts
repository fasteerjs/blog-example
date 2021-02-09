/**
 * The JWT secret
 *
 * @env JWT_SECRET
 */
const jwtSecret = () => {
  if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not set!");
  return process.env.JWT_SECRET;
};

const nodeEnv = () => process.env.NODE_ENV ?? "production";

const deploymentUrl = () => {
  if (!process.env.DEPLOYMENT_URL)
    throw new Error("DEPLOYMENT_URL is not set!");
  return process.env.DEPLOYMENT_URL;
};

const port = () => (process.env.PORT ? Number(process.env.PORT) : 3000);

const isDev = () => process.env.NODE_ENV === "development";
const isProd = () => process.env.NODE_ENV === "production";

export { jwtSecret, nodeEnv, deploymentUrl, port, isDev, isProd };
