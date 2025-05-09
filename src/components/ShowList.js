import React,{useState} from "react";
import ShowCard from "./ShowCard";
import styles from "./styles/ShowList.module.css";

import image1 from "../assets/mainTest/1.png";
import image2 from "../assets/mainTest/2.png";
import image3 from "../assets/mainTest/3.png";
import image4 from "../assets/mainTest/4.png";
import image5 from "../assets/mainTest/5.png";
import image6 from "../assets/mainTest/6.png";
import image7 from "../assets/mainTest/7.png";
import image8 from "../assets/mainTest/8.png";
import image9 from "../assets/mainTest/9.png";

function ShowList() {
//1) 카테고리 별 분류
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const showList = [
    {
      id: 1,
      title: "Long Play For You",
      club: "즉흥적새벽두시",
      date: "2024.11.10 - 11.11",
      tag1: "공연",
      tag2: "음악",
      category: "공연",
      img: image1,
    },
    {
      id: 2,
      title: "VAM Studio 2024",
      club: "VAM",
      date: "20xx.xx.xx - xx.xx",
      tag1: "졸업작품",
      tag2: "체험",
      category: "공연 외",
      img: image2,
    },
    {
      id: 3,
      title: "우리 집에 왜 왔니?",
      club: "어메이징스토리",
      date: "2024.05.23 - 05.25",
      tag1: "공연",
      tag2: "연극",
      category: "공연",
      img: image3,
    },
    {
      id: 4,
      title: "THE GOSPEL: Who we are",
      club: "피치파이브",
      date: "2024.11.23",
      tag1: "공연",
      tag2: "음악",
      category: "공연",
      img: image4,
    },
    {
      id: 5,
      title: "NEO Poem",
      club: "NEO",
      date: "20xx.xx.xx - xx.xx",
      tag1: "공연",
      tag2: "음악",
      category: "공연",
      img: image5,
    },
    {
      id: 6,
      title: "2025 MIC 스트릿 공연",
      club: "MIC",
      date: "20xx.xx.xx - xx.xx",
      tag1: "졸업작품",
      tag2: "스트릿공연",
      category: "공연 외",
      img: image6,
    },
    {
      id: 7,
      title: "화양연화",
      club: "한풍",
      date: "2024.11.17",
      tag1: "공연",
      tag2: "음악",
      category: "공연",
      img: image7,
    },
    {
      id: 8,
      title: "청춘",
      club: "ZIZZY",
      date: "2024.11.15 - 11.16",
      tag1: "공연",
      tag2: "춤",
      category: "공연",
      img: image8,
    },
    {
      id: 9,
      title: "OVER-FLOW",
      club: "리퀴드",
      date: "2024.11.20 - 11.21",
      tag1: "공연",
      tag2: "음악",
      category: "공연",
      img: image9,
    },
  ];
  
    
    const filteredList =
    selectedCategory === "전체"
      ? showList
      : showList.filter((item) => item.category === selectedCategory);


    return (
      <div className={styles.column}>
        <div className={styles.category}>
          {["전체", "공연", "공연 외"].map((category, idx) => (
            <div
              key={idx}
              className={
                selectedCategory === category
                  ? styles.activeCategory
                  : styles.inactiveCategory
              }
              onClick={() => setSelectedCategory(category)}
            >
              <span>{category}</span>
            </div>
          ))}
        </div>

        <div className={styles.showlist}>
          {filteredList.map((item) => (
            <ShowCard key={item.id} show={item} />
          ))}
        </div>
      </div>
     
  );
}

export default ShowList;
