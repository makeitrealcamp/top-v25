const books = [
  {
    id: "1",
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    id: "2",
    title: 'City of Glass',
    author: 'Paul Auster',
  },
  {
    id: "3",
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    id: "4",
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
  },
];

export const allBooks = () => books;

export const getSingleBook = ({ title, author }) => {
  return books.find(book => book.title === title || book.author === author);
}

export const getById = (id) => {
  return books.find(book => book.id === id);
}

export const addBook = (input) => {
  const { title, author } = input;

  const book = {
    id: (books.length + 1).toString(),
    title,
    author,
  }

  books.push(book);

  return book;
}
