import React, { useEffect, useState } from "react";
import styles from "./styles/Banner.module.css";

import banner1 from "../assets/bannerTest/1.png";
import banner2 from "../assets/bannerTest/2.png";
import banner3 from "../assets/bannerTest/3.png";
import banner4 from "../assets/bannerTest/4.png";



const bannerList = [
  {
    clubName: "베너2번째",
    name: "한자",
    date: "2025.06.01 - 06.03",
    image: banner1,
  },
  {
    clubName: "어메이징스토리",
    name: "우리 집에 왜 왔니?",
    date: "2025.05.23 - 05.25",
    image: banner2,
  },
  {
    clubName: "베너3번째",
    name: "청춘",
    date: "2025.06.10 - 06.12",
    image: banner3,
  },
  {
    clubName: "베너4번째",
    name: "배앰",
    date: "2025.02.10 - 02.21",
    image: banner4,
  },
];

function Banner() {

// 1) 배너 사진, 글씨 페이드인, 페이드 아웃 및 사진 바뀌기
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade-out

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % bannerList.length);
        setFade(true); // fade-in 
      }, 1000); // 1초 후 이미지+글자 교체
    }, 10000); // 10초마다 변경

    return () => clearInterval(interval);
  }, []);

  const current = bannerList[currentIndex];

  return (
    <div className={styles.banner}>
      <div className={styles.text}>
        <span>오늘의 추천</span>
      </div>
      <div className={styles.container}>
        <div className={styles.leftImg}>
          <img
            src={current.image}
            alt={current.name}
            className={`${styles.fade} ${fade ? styles.show : ""}`}
          />
        </div>

        <div className={styles.rightContainer}>
          <div className={`${styles.textContainer} ${styles.fade} ${fade ? styles.show : ""}`}>
            <span className={styles.clubName}>{current.clubName}</span>
            <span className={styles.name}>{current.name}</span>
            <span className={styles.date}>{current.date}</span>
          </div>

          <div className={styles.imgContainer}>
            <div className={styles.imgBox}>              
              <img src={banner1} alt="banner1"/>
            </div>
            <div className={styles.imgBox}>              
              <img src={banner2} alt="banner2"/>
            </div>
            <div className={styles.imgBox}>              
              <img src={banner3} alt="banner3"/>
            </div>
            <div className={styles.imgBox}>              
              <img src={banner4} alt="banner4"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
