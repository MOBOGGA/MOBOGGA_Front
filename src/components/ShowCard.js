import React from "react";
import styles from "./styles/ShowCard.module.css";

import top1 from "../assets/main/topTag.png";
import top2 from "../assets/main/topTag2.png";
import side1 from "../assets/main/sideTag.png";
import side2 from "../assets/main/sideTag2.png";


function ShowCard({ show }) {
  return (
    <div className={styles.showCard}>
      <div className={styles.card}>
        <img src={show.img} alt={show.title} className={styles.mainImg}/>
        <img src={top1} alt="" className={styles.top}/>
        <img src={side1} alt="" className={styles.side}/>
      </div>
      <span className={styles.name}>{show.title}</span>
      <div className={styles.clubDate}>
        <span className={styles.club}>{show.club}</span>
        <span>|</span>
        <span className={styles.date}>{show.date}</span>
      </div>
    </div>
  );
}

export default ShowCard;
