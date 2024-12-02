import { createContext, useState, useEffect } from 'react';

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('/path/to/books.json');
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ books, borrowedBooks, favBooks, setBorrowedBooks, setFavBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
