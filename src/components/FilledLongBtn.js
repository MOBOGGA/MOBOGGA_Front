import React from "react";
import styles from "./styles/FilledLongBtn.module.css";

function FilledLongBtn({ value, onClick }) {
  return (
    <button className={styles.body} onClick={onClick}>
      {value}
    </button>
  );
}


export default FilledLongBtn;
