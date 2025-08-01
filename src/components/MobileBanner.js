import React, { useEffect, useState } from "react";
import styles from "./styles/MobileBanner.module.css";
import axios from "axios";
import { useNavigate} from "react-router-dom";

import top2_orange from "../assets/main/m_banner_top_orange.svg";
import top2_purple from "../assets/main/m_banner_top_purple.svg";
import top3 from "../assets/main/m_banner_top_orange3.svg";
import top5 from "../assets/main/m_banner_top_orange5.svg";

function MobileBanner() {

  const [show, setShow] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

// 1) 배너 이미지 데이터 가져오기
useEffect(() => {
  const getShow = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/attraction/list`);
      console.log("rotatingPerformances 데이터 가져오기 성공");
      console.log(res.data.rotatingPerformances);
      console.log(res.data.rotatingPerformances[1]);
      const converted = res.data.rotatingPerformances.map((item) => ({
        id: item.id,
        name: item.title,
        clubID: item.club,
        period: item.period,
        category: item.category,
        photo: item.img?.trim() || "", // 이미지 없을 때 대비
      }));
      setShow(converted);
    } catch (err) {
      console.error("API 불러오기 실패", err);
    }
  };
  getShow();
}, []);

// 2) 배너 이미지 자동 슬라이드 기능
useEffect(() => {
  if (show.length === 0) return;

  const interval = setInterval(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % show.length);
      setFade(true);
    }, 1000);
  }, 10000);

  return () => clearInterval(interval);
}, [show]);

if (show.length === 0) {
  return <div className={styles.banner}>Loading...</div>;
}

// 3) 현재 인덱스에 따라 이전, 다음 이미지 계산
const len = show.length;
const prev2 = show[(currentIndex - 2 + len) % len];
const prev1 = show[(currentIndex - 1 + len) % len];
const next1 = show[(currentIndex + 1) % len];
const next2 = show[(currentIndex + 2) % len];
const current = show[currentIndex];


  return (
    <div className={styles.banner}>
      <div className={styles.text}>
        <span>오늘의 추천</span>
      </div>

      <div className={styles.container}>
        <div className={`${styles.imgBox1} ${styles.miniImgBox}`}>
          <img
            src={prev2.photo}
            alt="banner1"
            onClick={() =>
              navigate(
                prev2.category === "공연"
                  ? `/show/${prev2.id}`
                  : `/entertain/${prev2.id}`
              )
            }
          />
        </div>

        <div className={`${styles.imgBox2} ${styles.imgBox}`}>
          <img
            src={prev1.photo}
            alt="banner2"
            onClick={() =>
              navigate(
                prev1.category === "공연"
                  ? `/show/${prev1.id}`
                  : `/entertain/${prev1.id}`
              )
            }
          />
        </div>

{/* 중앙 메인 이미지 */}
       <div className={styles.MainImg}>
          <div className={styles.overlay}></div> 
          <img
            src={current.photo}
            alt={current.name}
            className={`${styles.fade} ${fade ? styles.show : ""} ${styles.mainImg}`}
            onClick={() => navigate(
              current.category === "공연" ? `/show/${current.id}` : `/entertain/${current.id}`
            )}
          />

          <span className={styles.name}>{current.name}</span>
          <span className={styles.date}>{current.period}</span>
          <span className={styles.clubName}>{current.clubID}</span>


          <img src={top2_orange} alt="" className={`${current.category === "체험" || current.category === "전시" ? styles.top2_orange : styles.hide}`}/>
          <img src={top2_purple} alt="" className={`${current.category === "공연" ? styles.top2_purple : styles.hide}`}/>
          <img src={top3} alt="" className={`${current.category === "먹거리" ? styles.top3 : styles.hide}`}/>
          <img src={top5} alt="" className={`${current.category === "스트릿공연" || current.category === "전시" ? styles.top5 : styles.hide}`}/>
        </div>

        <div className={`${styles.imgBox3} ${styles.imgBox}`}>
          <img
            src={next1.photo}
            alt="banner3"
            onClick={() =>
              navigate(
                next1.category === "공연"
                  ? `/show/${next1.id}`
                  : `/entertain/${next1.id}`
              )
            }
          />
        </div>

        <div className={`${styles.imgBox4} ${styles.miniImgBox}`}>
          <img
            src={next2.photo}
            alt="banner4"
            onClick={() =>
              navigate(
                next2.category === "공연"
                  ? `/show/${next2.id}`
                  : `/entertain/${next2.id}`
              )
            }
          />
        </div>
      </div>
    </div>

  );
}

export default MobileBanner;
