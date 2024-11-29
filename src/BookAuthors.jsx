import React from 'react';
import Books from './books';

const BookAuthors = () => {
  const authors = [...new Set(Books.map(book => book.author))];
  return (
    <div>
      {authors.map((author, index) => (
        <p key={index}>{author}</p>
      ))}
    </div>
  );
};

export default BookAuthors;
