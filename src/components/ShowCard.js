import React from "react";
import styles from "./styles/ShowCard.module.css";

import top1 from "../assets/main/topTag.png";
import side1 from "../assets/main/sideTag.png";


function ShowCard({ show }) {
  return (
    <div className={styles.showCard}>
      <div className={styles.card}>
        <img src={show.photo} alt={show.name} className={styles.mainImg}/>
        <img src={top1} alt="" className={styles.top}/> 
        <img src={side1} alt="" className={styles.side}/>
      </div>
      <span className={styles.name}>{show.name}</span>
      <div className={styles.clubDate}>
        <span className={styles.club}>{show.clubID}</span>
        <span>|</span>
        <span className={styles.date}>{show.startDate}</span>
        <span >{" - "}</span>
        <span className={styles.date1}>{show.endDate}</span>
      </div>
    </div>
  );
}

export default ShowCard;
