import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/MyReservCard.module.css";

function MyReservCard({ data }) {
  const navigate = useNavigate();
  if (!data) return null;

  const {
    showId,
    poster,
    title,
    scheduleInfo,
    location,
    managerPhone,
    accountInfo,
    ticketCount,
    price,
    paid,
  } = data;

  function parseScheduleInfo(scheduleInfo) {
    const regex = /^([\d공]+),\s*([\d.]+)\((.)\)$/; // 예: 2공, 2024.11.23(토)
    const match = scheduleInfo.match(regex);

    if (match) {
      return {
        order: match[1], // "2공"
        date: match[2], // "2024.11.23"
        weekday: match[3], // "토"
        isoDate: match[2].replace(/\./g, "-"), // "2024-11-23" → 정렬용
      };
    } else {
      return {
        order: null,
        date: null,
        weekday: null,
        isoDate: null,
      };
    }
  }

  const parsed = parseScheduleInfo(scheduleInfo);
  console.log(parsed.order); // "2공"
  console.log(parsed.isoDate); // "2024-11-23"

  const handleShowDetail = () => {
    navigate(`/show/${showId}`);
  }

  return (
    <div className={styles.card}>
      <div className={styles.card_img_box}>
        <img className={styles.card_img} src={poster} alt="공연 이미지" onClick={handleShowDetail} />
      </div>
      <div className={styles.card_text_box}>
        <div className={styles.card_title} onClick={handleShowDetail}>{title || "공연 제목 없음"}</div>
        <div className={styles.card_info_box}>
          <div className={styles.card_content}>
            <div className={styles.card_info_header} id={styles.order_box}>
              <div className={styles.card_order}>
                {parsed.order || "공연 정보 없음"}
              </div>
              <div className={styles.card_date}>
                {parsed.date || "날짜 정보 없음"} (
                {parsed.weekday || "날짜 정보 없음"})
              </div>
            </div>
          </div>
          <div className={styles.card_content}>
            <div className={styles.card_info_header}>장소: </div>
            <div className={styles.card_place}>
              {location || "장소 정보 없음"}
            </div>
          </div>
          <div className={styles.card_content}>
            <div className={styles.card_info_header}>담당자: </div>
            <div className={styles.card_manager}>
              {managerPhone || "정보 없음"}
            </div>
          </div>
          <div
            className={
              paid === false ? styles.card_content : styles.card_content_hidden
            }
            id={styles.account_info}
          >
            <div className={styles.card_info_header} id={styles.account_box}>
              계좌번호:
            </div>
            <div className={styles.card_account}>{accountInfo}</div>
          </div>
          <div className={styles.ticket_info}>
            <div className={styles.ticket_num}>{ticketCount}매</div>
            <div className={styles.ticket_price}>
              {price?.toLocaleString()}원
            </div>
            <div className={styles.deposit_status}>
              {paid ? (
                <span style={{ color: "#1AAE00" }}>입금완료</span>
              ) : (
                <span style={{ color: "var(--ORANGE)" }}>미입금</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyReservCard;
