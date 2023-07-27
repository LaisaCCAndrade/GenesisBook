import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.booksContainer}>
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

export default Footer;
