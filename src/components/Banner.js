import React, { useEffect, useState } from "react";
import styles from "./styles/Banner.module.css";

import banner1 from "../assets/bannerTest/1.png";
import banner2 from "../assets/bannerTest/2.png";
import banner3 from "../assets/bannerTest/3.png";
import banner4 from "../assets/bannerTest/4.png";
import axios from "axios";



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
//   const [show, setShow] = useState([]);

// // 1) 배너 사진, 글씨 페이드인, 페이드 아웃 및 사진 바뀌기
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fade, setFade] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false); // fade-out

//       setTimeout(() => {
//         setCurrentIndex((prev) => (prev + 1) % show.length);
//         setFade(true); // fade-in 
//       }, 1000); // 1초 후 이미지+글자 교체
//     }, 10000); // 10초마다 변경

//     return () => clearInterval(interval);
//   }, []);

//   const current = show[currentIndex];

//   // 2) 배너 데이터 가져오기 

//     const getShow = async () => {
//       try {
//         const res = await axios.get("http://jinjigui.info:8080/attraction/list");
//         console.log("show 데이터 가져오기 성공");
//         console.log(res.data.rotatingPerformances);
    
//         const converted = res.data.entireList.map((item) => {
    
//           return {
//             id: item.id,
//             name: item.title,
//             clubID: item.club,
//             period: item.period,
//             photo: item.img, // 이미지 없을 경우 기본값 대체
//           };
//         });
    
//         setShow(converted);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//   // 2) 페이지 로드되면 show값 불러옴
  
//   useEffect(() => {
//     getShow();
//   }, []);   

//   if (show.length === 0) return null;

const [show, setShow] = useState([]);
const [currentIndex, setCurrentIndex] = useState(0);
const [fade, setFade] = useState(true);

useEffect(() => {
  const getShow = async () => {
    try {
      const res = await axios.get("http://jinjigui.info:8080/attraction/list");
      console.log("rotatingPerformances 데이터 가져오기 성공");
      console.log(res.data.rotatingPerformances);
      console.log(res.data.rotatingPerformances[1]);
      const converted = res.data.rotatingPerformances.map((item) => ({
        id: item.id,
        name: item.title,
        clubID: item.club,
        period: item.period,
        photo: item.img?.trim() || "", // 이미지 없을 때 대비
      }));
      setShow(converted);
    } catch (err) {
      console.error("API 불러오기 실패", err);
    }
  };
  getShow();
}, []);

useEffect(() => {
  if (show.length === 0) return;

  const interval = setInterval(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % show.length);
      setFade(true);
    }, 1000);
  }, 5000);

  return () => clearInterval(interval);
}, [show]);

if (show.length === 0) {
  return <div className={styles.banner}>Loading...</div>;
}

const current = show[currentIndex];

  return (
    <div className={styles.banner}>
      <div className={styles.text}>
        <span>오늘의 추천</span>
      </div>
      <div className={styles.container}>
        <div className={styles.leftImg}>
          <img
            src={current.photo}
            alt={current.name}
            className={`${styles.fade} ${fade ? styles.show : ""}`}
          />
        </div>

        <div className={styles.rightContainer}>
          <div className={`${styles.textContainer} ${styles.fade} ${fade ? styles.show : ""}`}>
            <span className={styles.clubName}>{current.clubID}</span>
            <span className={styles.name}>{current.name}</span>
            <span className={styles.date}>{current.period}</span>
          </div>

          <div className={styles.imgContainer}>
            <div className={styles.imgBox}>              

              <img src={show[0].photo} alt="banner1"/>
            </div>
            <div className={styles.imgBox}>              
              <img src={show[1].photo} alt="banner2"/>
            </div>
            <div className={styles.imgBox}>              
              <img src={show[2].photo} alt="banner3"/>
            </div>
            <div className={styles.imgBox}>              
              <img src={show[3].photo} alt="banner4"/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
