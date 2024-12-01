import { fetchBooks } from "./services/bookService";

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await fetchBooks();
      setBooks(data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  fetchData();
}, []);
