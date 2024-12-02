import React, { useContext } from 'react';
import BooksContext from './BooksContext';

const BookCard = ({ id, title, author, rating, genre }) => {
  const { borrowedBooks, favBooks, setBorrowedBooks, setFavBooks } = useContext(BooksContext);

  const handleAddMe = () => {
    setBorrowedBooks([...borrowedBooks, title]);
  };

  const handleFavorite = () => {
    setFavBooks([...favBooks, title]);
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{rating}</p>
      <p>{genre}</p>
      <button onClick={handleAddMe}>Add Me</button>
      <button onClick={handleFavorite}>Favorite</button>
    </div>
  );
};

export default BookCard;
