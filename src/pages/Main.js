import React from "react";
import styles from "./styles/Main.module.css";

import Banner from "../components/Banner";
import ShowList from "../components/ShowList";

function Main() {
  return (
    <>
      <Banner />
      <div className={styles.main}>
        <span className={styles.categoryText}>카테고리</span>
        <ShowList className={styles.showlist}/>
      </div>
    </>
  );
}

export default Main;
