import { MutationResolvers } from "../__generated__/graphql";
import { books } from "../db";

const mutations: MutationResolvers = {
  addBook: (_, args) => {
    books.push(args.book);

    return args.book;
  },
};

export default mutations;
