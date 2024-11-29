import React from 'react';
import Books from './books';
import BookCard from './BookCard';

const BookDetails = () => (
  <div>
    {Books.map((book) => (
      <BookCard key={book.id} {...book} />
    ))}
  </div>
);

export default BookDetails;
