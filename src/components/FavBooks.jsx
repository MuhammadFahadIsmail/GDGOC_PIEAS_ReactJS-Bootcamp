import { useContext } from "react";
import  BookContext  from "../context/BookContext";

const FavBooks = () => {
  const { favBooks } = useContext(BookContext);

  return (
    <div>
      <h3>Favorite Books</h3>
      {favBooks.length > 0 ? (
        <ul>
          {favBooks.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      ) : (
        <p>No favorite books yet.</p>
      )}
    </div>
  );
};

export default FavBooks;
