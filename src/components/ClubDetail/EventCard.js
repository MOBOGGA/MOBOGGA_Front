import React from "react";
import styles from "../styles/ShowCard.module.css";



function EventCard({ show }) {
  return (
    <div className={styles.showCard}>
      <div className={styles.card}>
        <img src={show.photo} alt={show.name} className={`${styles.mainImg} ${styles.imgdetail}`} />
      </div>
      <span className={styles.name}>{show.title}</span>
      <div className={styles.clubDate}>
        <span className={styles.date}>{show.startDate}</span>
        <span >{" - "}</span>
        <span className={styles.date1}>{show.endDate}</span>
      </div>
    </div>
  );
}

export default EventCard;
