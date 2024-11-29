import React from 'react';
import HighRatedBooks from './HighRatedBooks';
import BookDetails from './BookDetails';
import FictionBooks from './FictionBooks';
import BookAuthors from './BookAuthors';
import BorrowedBooks from './components/BorrowedBooks';
import FavBooks from './components/FavBooks';
const App = () => (
  <div style={{
    textAlign: "center"}}>
    <h1>Library Manager</h1>
    <BorrowedBooks />
    <FavBooks />
    <HighRatedBooks />
    <BookDetails />
    <FictionBooks />
    <BookAuthors />
    
  </div>
);

export default App;
