import React,{useState} from "react";
import RecruitingCard from "./RecruitingCard";
import styles from "./styles/RecruitingList.module.css";

import img1 from "../assets/recruitingTest/img1.png";
import img2 from "../assets/recruitingTest/img2.png";
import img3 from "../assets/recruitingTest/img3.png";
import img4 from "../assets/recruitingTest/img4.png";
import img5 from "../assets/recruitingTest/img5.png";
import img6 from "../assets/recruitingTest/img6.png";
import img7 from "../assets/recruitingTest/img7.png";
import img8 from "../assets/recruitingTest/img8.png";
import img9 from "../assets/recruitingTest/img9.png";
import img10 from "../assets/recruitingTest/img10.png";
import img11 from "../assets/recruitingTest/img11.png";
import img12 from "../assets/recruitingTest/img12.png";
import img13 from "../assets/recruitingTest/img13.png";
import img14 from "../assets/recruitingTest/img14.png";


function RecruitingList() {
// 1) 리크루팅 더미 데이터
  const showList = [
    {
      club: "리베리",
      title: "클래식 기타 동아리 리베리에서 낭만",
      img: img1,
    },
    {
      club: "그랜드슬램",
      title: "2025-1 GRAND SLAM Recruiting",
      img: img2,
    },
    {
      club: "삼손",
      title: "웰니스 동아리 SAMSON 25-1 리크루팅",
      img: img3,
    },
    {
      club: "즉흥적새벽두시",
      title: "25-1 즉흥적 새벽 두 시 리크루팅",
      img: img4,
    },
    {
      club: "천풍해세",
      title: "25-1 천풍해세 리크루팅",
      img: img5,
    },
    {
      club: "꾼들",
      title: "꾼들 KKUNDLE 2025 리크루팅 RECRUITING",
      img: img6,
    },
    {
      club: "MIC",
      title: "Motion In Christ 리크루팅",
      img: img7,
    },
    {
      club: "Ammission",
      title: "한동의 최강 힙합 동아리 Amusement Admission",
      img: img8,
    },
    {
      club: "하향",
      title: "하향 19기 리쿠르팅",
      img: img9,
    },
    {
      club: "CANVAS",
      title: "2025-1 CANVAS 리크루팅",
      img: img10,
    },
    {
      club: "ZIZZY",
      title: "2025 ZIZZY 59 리쿠르팅",
      img: img11,
    },
    {
      club: "한방스윙스",
      title: "한동대 야구 동아리 한방스윙스 리크루팅",
      img: img12,
    },
    {
      club: "한마지로",
      title: "한동대학교 유도동아리 한마지로 2025 리쿠르팅",
      img: img13,
    },
    {
      club: "스윕",
      title: "2025년 1학기 SWEEP 신입기수 모집",
      img: img14,
    },
  ];

  
  return (
    <>
      <div className={styles.recruitingList}>
        {showList.map((item, index) => (
          <RecruitingCard key={index} show={item} />
        ))}
      </div>
    </>
  );
}

export default RecruitingList;