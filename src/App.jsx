import React from 'react';
import { BooksProvider } from './BooksContext';
import BookList from './BookList';
import BorrowedBooks from './BorrowedBooks';
import FavoriteBooks from './FavoriteBooks';

const App = () => {
  return (
    <BooksProvider>
      <BookList />
      <BorrowedBooks />
      <FavoriteBooks />
    </BooksProvider>
  );
};

export default App;
