const typeDefs = `#graphql
  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    "The ID of the book."
    id: ID!
    "The title of the book."
    title: String
    "The author of the book."
    author: String
  }

  input CreateBookInput {
    title: String!
    author: String!
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    "A simple type for getting started!"
    helloWorld: String

    "Fetches an array of books!"
    allBooks: [Book]

    singleBook(title: String author: String): Book

    getById(id: ID!): Book
  }

  type Mutation {
    "Add a new book to the database."
    addBook(input: CreateBookInput!): Book!
  }
`;

export default typeDefs;
