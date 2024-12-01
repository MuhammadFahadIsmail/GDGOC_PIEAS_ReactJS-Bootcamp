import BookList from "../components/BookList";
import BorrowedBooks from "../components/BorrowedBooks";
import FavBooks from "../components/FavBooks";

const HomePage = () => (
  <div>
    <h1>Library Manager</h1>
    <BookList />
    <BorrowedBooks />
    <FavBooks />
  </div>
);

export default HomePage;
