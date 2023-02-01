import { allBooks, addBook, getById, getSingleBook } from './book.serivces.js';

const Query = {
  allBooks,
  singleBook: (parent, args) => {
    return getSingleBook(...args);
  },
  getById: (_, args) => {
    const { id } = args;
    return getById(id);
  }
}

const Mutation = {
  addBook: (_, { input }) => {
    return addBook(input);
  }
}

export default {
  Query,
  Mutation,
};
