import React from 'react';
import { useState } from 'react';
import { BookContext } from './BookContext';

export const BookProvider = ({ children }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);

  const addBorrowedBook = (title) => {
    if (!borrowedBooks.includes(title)) {
      setBorrowedBooks([...borrowedBooks, title]);
    }
  };

  const addFavBook = (title) => {
    if (!favBooks.includes(title)) {
      setFavBooks([...favBooks, title]);
    }
  };

  return (
    <BookContext.Provider value={{ borrowedBooks, favBooks, addBorrowedBook, addFavBook }}>
      {children}
    </BookContext.Provider>
  );
};
