import { ApolloServerOptions, BaseContext } from "@apollo/server";
import { readFileSync } from "fs";
import { resolvers } from "./resolvers/index";

const typeDefs = readFileSync("./src/schema.graphql", { encoding: "utf-8" });

export const appConfig: ApolloServerOptions<BaseContext> = {
  typeDefs,
  resolvers,
};
