import { QueryResolvers } from "../__generated__/graphql";
import { books } from "../db";

const queries: QueryResolvers = {
  books: () => books,
  book: (_, args) => {
    const book = books.find((book) =>
      book.title.toLocaleLowerCase().includes(args.title.toLocaleLowerCase())
    );

    return book;
  },
};

export default queries;
