import React from "react";
import styles from "./styles/MyReservCard.module.css";

import poster from "../assets/mainTest/3.png";

function MyReservCardCard({ show }) {
  return (
    <div className={styles.card}>
      <div className={styles.card_img_box}>
        <img className={styles.card_img} src={poster} alt="공연 이미지" />
      </div>
      <div className={styles.card_text_box}>
        <div className={styles.card_title}>우리 집에 왜 왔니?</div>
        <div className={styles.card_info_box}>
          <div className={styles.card_content}>
            <div className={styles.card_info_header} id={styles.order_box}>
              1공
            </div>
            <div className={styles.card_date}>2025.05.23(금) 19시 00분</div>
          </div>
          <div className={styles.card_content}>
            <div className={styles.card_info_header}>장소: </div>
            <div className={styles.card_place}>학관 102호</div>
          </div>
          <div className={styles.card_content}>
            <div className={styles.card_info_header}>담당자: </div>
            <div className={styles.card_manager}>010-1234-5678(김이름)</div>
          </div>
          <div className={styles.card_content}>
            <div className={styles.card_info_header} id={styles.account_box}>
              계좌번호:{" "}
            </div>
            <div className={styles.card_account}>
              ㅇㅇ은행 0000-0000-0000-00
            </div>
          </div>
          <div className={styles.ticket_info}>
            <div className={styles.ticket_num}>4매</div>
            <div className={styles.ticket_price}>18000원</div>
            <div className={styles.deposit_status}>미입금</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyReservCardCard;
