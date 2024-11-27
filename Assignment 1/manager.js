import Books from './books.js';

const printHighRatingBooks = () => {
    const highRatingBooks = Books.filter(book => book.rating > 4.5);
    highRatingBooks.forEach(book => console.log(book.title));
};

const printBookDetails = () => {
    Books.forEach(({ title, author, rating, genre }) => {
      console.log(`Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`);
    });
};

const printFictionBooks = () => {
    const fictionBooks = Books.filter(book => book.genre.toLowerCase() === 'fiction');
    fictionBooks.forEach(book => console.log(book.title));
};

const getAllAuthors = () => {
    const authors = Books.map(book => book.author);
    console.log(authors);
};

printHighRatingBooks();
printBookDetails();
printFictionBooks();
getAllAuthors();