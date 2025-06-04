import React from "react";
import styles from "./styles/RecruitingCard.module.css";

function RecruitingCard({ show, onClick  }) {
  return (
    <div className={styles.showCard} onClick={onClick}>
      <div className={styles.card}>
        <img src={show.poster} alt={show.club} className={styles.mainImg}/>
      </div>
      <span className={styles.name}>{show.clubName}</span>
      <span className={styles.title}>{show.recruitingTitle}</span>
    </div>
  );
}

export default RecruitingCard;