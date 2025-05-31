import React from "react";
import styles from "./styles/ClubCard.module.css";



function ClubCard({ show }) {
  return (
    <div className={styles.clubCard}>
      <div className={styles.clubImg}>
      </div>
      <span className={styles.name}>{show.name}</span>
    </div>
  );
}

export default ClubCard;