import { useContext } from 'react';
import { BookContext } from './BookContext';
import Button from './Button';

const BookCard = ({ title, author, rating, genre }) => {
  const { addBorrowedBook, addFavBook } = useContext(BookContext);

  return (
    <div className="book-card">
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Rating: {rating}</p>
      <p>Genre: {genre}</p>
      <Button label="Add Me" onClick={() => addBorrowedBook(title)} />
      <Button label="Favorite" onClick={() => addFavBook(title)} />
    </div>
  );
};

export default BookCard;
