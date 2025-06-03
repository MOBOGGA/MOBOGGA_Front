import React from "react";
import styles from "./styles/ClubCard.module.css";



function ClubCard({ show , onClick }) {
  return (
    <div className={styles.clubCard} onClick={onClick}>
      <div className={styles.clubImg}>
        <img src={show.poster} alt={show.clubName} className={styles.mainImg} />
      </div>
      <span className={styles.name}>{show.clubName}</span>
      <span className={styles.name}>{show.name}</span>
    </div>
  );
}

export default ClubCard;