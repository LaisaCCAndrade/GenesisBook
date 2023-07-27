import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ initialBooks }) => {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (term) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          term
        )}&maxResults=30&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}`
      );
      const data = await response.json();
      setSearchTerm(term);
      setBooks(data.items || []);
    } catch (error) {
      console.error("Erro ao buscar os livros:", error.message);
      setBooks([]);
    }
  };
  return (
    <div className={styles.booksContainer}>
      <header className={styles.header}>
        <GiHamburgerMenu size={40} className={styles.icon} />
        <img
          className={styles.logo}
          src="https://cdn.icon-icons.com/icons2/2622/PNG/512/book_icon_158035.png"
        />
        <h1 className={styles.title}>Genesis Book</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
    </div>
  );
};

export default Header;
