import React from "react";
import styles from "./LastRecruitingCard.module.css";

function LastRecruitingCard({ show }) {
  return (
    <div className={styles.showCard}>
      <div className={styles.card}>
        <img src={show.photo} alt={show.club} className={styles.mainImg}/>
      </div>
      <span className={styles.name}>{show.period}</span>
    </div>
  );
}

export default LastRecruitingCard;