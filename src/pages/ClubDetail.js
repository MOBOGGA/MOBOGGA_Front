import React from "react";
import styles from "./styles/ClubDetail.module.css";

import clubimg from "../assets/recruitingTest/img10.png";



function ClubDetail() {
  return (
    <>
      <div className={styles.clubDetail}>
        <span className={styles.titleName}> 동아리 정보 </span>
        <div className={styles.clubDeatilContainer}>
          <div className={styles.clubDeatilLeft}>
            <img src={clubimg} alt ="" className={styles.ClubImg}/>
            <div className={styles.clubDeatilText1}>
              <span className={styles.clubDeatiltitle}>필수학기</span>
              <span className={styles.clubDeatiltext}>연속 4학기</span>
            </div>
            <div className={styles.clubDeatilText2}>

            </div>
          </div>
          <div className={styles.clubDeatilRight}>

          </div>
        </div>
        <span className={styles.titleName}> 진행 중인 이벤트 </span>
        <span className={styles.titleName}> 지난 리크루팅 </span>
        <span className={styles.titleName}> 지난 볼거리 </span>
      </div>
    </>
  );
}

export default ClubDetail;