import { hookFastify, Fasteer } from "@fasteerjs/fasteer";
import { FastifyInstance } from "fastify";
import { PrismaClient } from "@prisma/client";
import path from "path";

// Create a new Prisma Instance
const db = new PrismaClient();

// Typed Injectables
export interface BlogInjected {
  db: typeof db;
}

// Typed Functional Controller with Injectables
export type BlogCtrl = Fasteer.FCtrl<FastifyInstance, {}, BlogInjected>;

// Create a new Fasteer Instance
const fasteer = hookFastify({
  controllers: ["ts", "js"].map(ext =>
    path.join(__dirname, "controllers", `*Controller.${ext}`)
  ),
  port: 4000,
});

// Inject Prisma into Fasteer
fasteer.inject<BlogInjected>({ db });

const start = async () => {
  const addr = await fasteer.start();
  fasteer.logger.info("Fasteer started!", addr);
};

// Let's go!
start();
