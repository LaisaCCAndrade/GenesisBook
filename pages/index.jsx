import React, { useState } from "react";
import fetch from "isomorphic-fetch";
import styles from "../styles/Books.module.css";
import Link from "next/link";
import BookDetails from "../components/BookDetails";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Books = ({ initialBooks }) => {
  const [books, setBooks] = useState(initialBooks);
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className={styles.booksContainer}>
      <Header />
      <section className={styles.carousel}>
        <div>
          <img
            src="https://lojasaraivanew.vtexassets.com/assets/vtex.file-manager-graphql/images/392783bd-291d-4ad6-9321-1c9306d4c9ee___a5d097825a06bc9151abcbe2140348ec.png"
            alt=""
          />
        </div>
      </section>
      <ul className={styles.booksList}>
        {books.map((book) => (
          <li
            key={book.id}
            onClick={() => openModal(book)}
            className={styles.booksItem}
          >
            <Link
              className={styles.details}
              href={`/detalhes?id=${encodeURIComponent(book.id)}`}
            >
              <img
                src={
                  book.volumeInfo.imageLinks?.thumbnail ||
                  "https://via.placeholder.com/150"
                }
                alt={book.volumeInfo.title}
                className={styles.bookImg}
              />
            </Link>
          </li>
        ))}
      </ul>
      <ul className={styles.booksLists}>
        {books.map((book) => (
          <li
            key={book.id}
            onClick={() => openModal(book)}
            className={styles.booksItens}
          >
            <Link
              className={styles.details}
              href={`/detalhes?id=${encodeURIComponent(book.id)}`}
            >
              <img
                src={
                  book.volumeInfo.imageLinks?.thumbnail ||
                  "https://via.placeholder.com/150"
                }
                alt={book.volumeInfo.title}
                className={styles.bookImg}
              />
              <div className={styles.detail}>
                <h2 className={styles.bookTitle}>{book.volumeInfo.title}</h2>
                <p className={styles.bookAuthor}>
                  Autor:{" "}
                  {book.volumeInfo.authors?.join(", ") || "Autor desconhecido"}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {selectedBook && <BookDetails book={selectedBook} onClose={closeModal} />}
     <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=book&maxResults=15&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}`
    );
    const data = await response.json();

    return {
      props: {
        initialBooks: data.items || [],
      },
    };
  } catch (error) {
    console.error("Erro ao buscar os livros:", error.message);
    return {
      props: {
        initialBooks: [],
      },
    };
  }
}

export default Books;
