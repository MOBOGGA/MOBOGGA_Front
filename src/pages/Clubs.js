import React from "react";
import styles from "./styles/Main.module.css";

import ClubList from "../components/ClubList";

function Clubs() {
  return (
    <>
      <div className={styles.main}>
        <span className={styles.categoryText}>카테고리</span>
        <ClubList/>
      </div>
    </>
  );
}

export default Clubs;