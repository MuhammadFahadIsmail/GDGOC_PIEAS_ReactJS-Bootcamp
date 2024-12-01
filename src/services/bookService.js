const fetchBooks = () => {
  try {
    const response = await fetch("/assets/books.json");
    if (!response.ok) throw new Error("Failed to fetch books");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addBook = (book) => {
  // Code to add a book
};

const bookService = {
  fetchBooks,
  addBook,
};

export default bookService;
