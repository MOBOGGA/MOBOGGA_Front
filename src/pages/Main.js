import React from "react";
import styles from "./styles/Main.module.css";

import Banner from "../components/Banner";


function Main() {
  return (
    <>
      <div className={styles.main}>
        <Banner />
      </div>
    </>
  );
}

export default Main;
