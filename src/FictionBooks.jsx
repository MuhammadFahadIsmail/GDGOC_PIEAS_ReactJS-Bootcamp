import React from 'react';
import Books from './books';
import BookCard from './BookCard';

const FictionBooks = () => {
  const fictionBooks = Books.filter(book => book.genre === 'Fiction');
  return (
    <div>
      {fictionBooks.map(book => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
};

export default FictionBooks;
