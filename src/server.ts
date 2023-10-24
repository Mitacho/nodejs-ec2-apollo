import "dotenv/config";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { appConfig } from "./app";

const server = new ApolloServer(appConfig);

async function start() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT ? Number(process.env.PORT) : 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

start();
