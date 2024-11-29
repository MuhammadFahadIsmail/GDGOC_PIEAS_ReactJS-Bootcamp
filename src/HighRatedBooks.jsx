import React from 'react';
import  Books  from './books';
import BookCard from './BookCard';

const HighRatedBooks = () => {
  const highRatedBooks = Books.filter(book => book.rating > 4.5);
  return (
    <div>
      {highRatedBooks.map(book => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
};

export default HighRatedBooks;
