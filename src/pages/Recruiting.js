import React from "react";
import styles from "./styles/Recruiting.module.css";

import RecruitingList from "../components/RecruitingList";


function Recruiting() {
  return (
    <>
      <div className={styles.recruiting}>
        <RecruitingList />
      </div>
    </>
  );
}

export default Recruiting;