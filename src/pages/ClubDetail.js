import React from "react";
import styles from "./styles/ClubDetail.module.css";



function ClubDetail() {
  return (
    <>
      <div className={styles.clubDetail}>
        <span className={styles.titleName}> 동아리 정보 </span>
        <div className={styles.clubDeatilContainer}>
          <div className={styles.clubDeatilLeft}>
          </div>
          <div className={styles.clubDeatilLeft}>

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