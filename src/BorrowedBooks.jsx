import React, { useContext } from 'react';
import BooksContext from './BooksContext';

const BorrowedBooks = () => {
  const { borrowedBooks } = useContext(BooksContext);

  return (
    <div>
      <h2>Borrowed Books</h2>
      <ul>
        {borrowedBooks.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowedBooks;
