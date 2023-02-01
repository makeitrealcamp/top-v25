import bookResolvers from './book/book.resolvers.js';

const resolvers = {
  Query: {
    helloWorld: () => 'Hello world!',
    ...bookResolvers.Query,
  },

  Mutation: {
    ...bookResolvers.Mutation,
  },
}

export default resolvers;
