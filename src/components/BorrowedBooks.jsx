import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BorrowedBooks = () => {
  const { borrowedBooks } = useContext(BookContext);

  return (
    <div>
      <h3>Borrowed Books</h3>
      {borrowedBooks.length > 0 ? (
        <ul>
          {borrowedBooks.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      ) : (
        <p>No borrowed books yet.</p>
      )}
    </div>
  );
};

export default BorrowedBooks;
