import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "../components/SearchBar";
import Loading from "./Loading";
import styles from "../styles/BookDetails.module.css";

const BookDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    if (id) {
      fetchBookDetails();
    }
  }, [id]);

  const fetchBookDetails = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      const data = await response.json();
      setBookDetails(data.volumeInfo);
    } catch (error) {
      console.error("Erro ao buscar os detalhes do livro:", error.message);
      setBookDetails(null);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div>
      <header className={styles.header}>
        <GiHamburgerMenu size={40} className={styles.icon} />
        <img
          className={styles.logo}
          src="https://cdn.icon-icons.com/icons2/2622/PNG/512/book_icon_158035.png"
        />
        <h1 className={styles.title}>Genesis Book</h1>
        <SearchBar />
      </header>
      <button className={styles.btn} onClick={handleGoBack}>
        Back
      </button>
      {bookDetails ? (
        <div className={styles.bookDetails}>
          <h1>Detalhes do Livro</h1>
          <div className={styles.description}>
            <img
              src={
                bookDetails.imageLinks?.thumbnail ||
                "https://via.placeholder.com/150"
              }
              alt={bookDetails.title}
              className={styles.bookImg}
            />
            <div className={styles.author}>
              <h2 className={styles.bookTitles}>{bookDetails.title}</h2>
              <p className={styles.bookAuthors}>
                {" "}
                {bookDetails.authors?.join(", ") || "Desconhecido"}
              </p>
            </div>
          </div>
          <div className={styles.bookDetailsEditore}>
            <p className={styles.bookEditore}>
              Editora: {bookDetails.publisher || "Desconhecido"}
            </p>
            <p className={styles.bookEditore}>
              Ano de Publicação: {bookDetails.publishedDate || "Desconhecido"}
            </p>
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: bookDetails.description }}
            className={styles.bookDescription}
          ></p>
        </div>
      ) : (
        <Loading />
      )}
      <footer className={styles.footer}>
        <img
          className={styles.logoFooter}
          src="https://cdn.icon-icons.com/icons2/2622/PNG/512/book_icon_158035.png"
        />
        <h1 className={styles.titleFooter}>Genesis Book</h1>
        <img
          className={styles.logoFooterRedes}
          src="https://img.freepik.com/vetores-premium/colecao-realista-de-logotipo-de-midia-social-facebook-instagram-twitter-whatsapp_528453-237.jpg?w=1800"
        />
      </footer>
    </div>
  );
};

export default BookDetail;
