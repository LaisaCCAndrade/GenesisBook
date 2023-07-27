import React from "react";
import styles from "../styles/BookLoading.module.css";

const Loading = () => {
  return (
    <div>
      <div className={styles.ldsSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
