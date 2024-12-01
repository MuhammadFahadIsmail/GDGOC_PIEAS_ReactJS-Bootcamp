import React, { useContext } from "react";
import  BookContext  from "../context/BookContext";
import BookCard from "./BookCard.jsx";

const BookList = () => {
  const { books } = useContext(BookContext);

  return (
    <div>
      <h3>All Books</h3>
      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
};

export default BookList;
