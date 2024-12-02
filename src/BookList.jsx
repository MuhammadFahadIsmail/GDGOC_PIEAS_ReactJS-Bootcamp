import React, { useContext } from 'react';
import BooksContext from './BooksContext';
import BookCard from './BookCard';

const BookList = () => {
  const { books } = useContext(BooksContext);

  return (
    <div>
      {books.map(book => (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          rating={book.rating}
          genre={book.genre}
        />
      ))}
    </div>
  );
};

export default BookList;
