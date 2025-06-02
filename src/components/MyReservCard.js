import React, { useEffect, useState } from "react";
import styles from "./styles/MyReservCard.module.css";
import poster from "../assets/mainTest/3.png";

function MyReservCard({ scheduleId }) {
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://jinjigui.info:8080/show/detail/${scheduleId}` // ← 실제 API 경로로 수정 필요
        );
        if (!response.ok) {
          throw new Error("공연 정보를 불러오지 못했습니다.");
        }
        const data = await response.json();
        setShow(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (scheduleId) {
      fetchShowDetails();
    }
  }, [scheduleId]);

  if (!scheduleId) return null;
  if (loading) return <div className={styles.card}>로딩중...</div>;
  if (error) return <div className={styles.card}>에러: {error}</div>;
  if (!show) return null;

  const { title, date, place, manager, account, price, scheduleInfo } = show;
  const { ticketCount = 1, depositStatus = "미입금" } = show;

  const formattedDate = new Date(date).toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className={styles.card}>
      <div className={styles.card_img_box}>
        <img className={styles.card_img} src={poster} alt="공연 이미지" />
      </div>
      <div className={styles.card_text_box}>
        <div className={styles.card_title}>{title || "공연 제목 없음"}</div>
        <div className={styles.card_info_box}>
          <div className={styles.card_content}>
            <div className={styles.card_info_header} id={styles.order_box}>
              {scheduleInfo}
            </div>
            <div className={styles.card_date}>{formattedDate}</div>
          </div>
          <div className={styles.card_content}>
            <div className={styles.card_info_header}>장소: </div>
            <div className={styles.card_place}>{place || "장소 정보 없음"}</div>
          </div>
          <div className={styles.card_content}>
            <div className={styles.card_info_header}>담당자: </div>
            <div className={styles.card_manager}>
              {manager?.phone || ""} ({manager?.name || "이름 없음"})
            </div>
          </div>
          <div className={styles.card_content}>
            <div className={styles.card_info_header} id={styles.account_box}>
              계좌번호:{" "}
            </div>
            <div className={styles.card_account}>
              {account || "계좌 정보 없음"}
            </div>
          </div>
          <div className={styles.ticket_info}>
            <div className={styles.ticket_num}>{ticketCount}매</div>
            <div className={styles.ticket_price}>
              {price?.toLocaleString()}원
            </div>
            <div className={styles.deposit_status}>{depositStatus}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyReservCard;
