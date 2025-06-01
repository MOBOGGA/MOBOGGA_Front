import React,{useState, useEffect} from "react";
import ShowCard from "./ShowCard";
import styles from "./styles/ShowList.module.css";
import axios from "axios";


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
      name: "Long Play For You",
      clubID: "즉흥적새벽두시",
      startDate: "2024.11.10",
      endDate: "11.11",
      tag: "음악",
      category: "공연",
      photo: image1,
    },
    {
      id: 2,
      name: "VAM Studio 2024",
      clubID: "VAM",
      startDate: "20xx.xx.xx",
      endDate: "xx.xx",
      tag: "체험",
      category: "즐길거리",
      photo: image2,
    },
    {
      id: 3,
      name: "우리 집에 왜 왔니?",
      clubID: "어메이징스토리",
      startDate: "2024.05.23",
      endDate: "05.25",
      tag: "공연",
      category: "공연",
      photo: image3,
    },
    {
      id: 4,
      name: "THE GOSPEL: Who we are",
      clubID: "피치파이브",
      startDate: "2024.11.23",
      endDate: "",
      tag: "공연",
      category: "공연",
      photo: image4,
    },
    {
      id: 5,
      name: "NEO Poem",
      clubID: "NEO",
      startDate: "20xx.xx.xx",
      endDate: "xx.xx",
      tag: "공연",
      category: "공연",
      photo: image5,
    },
    {
      id: 6,
      name: "2025 MIC 스트릿 공연",
      clubID: "MIC",
      startDate: "20xx.xx.xx",
      endDate: "xx.xx",
      tag: "졸업작품",
      category: "즐길거리",
      photo: image6,
    },
    {
      id: 7,
      name: "화양연화",
      clubID: "한풍",
      startDate: "2024.11.17",
      endDate: "",
      tag: "공연",
      category: "공연",
      photo: image7,
    },
    {
      id: 8,
      name: "청춘",
      clubID: "ZIZZY",
      startDate: "2024.11.15",
      endDate: "11.16",
      tag: "공연",
      category: "공연",
      photo: image8,
    },
    {
      id: 9,
      name: "OVER-FLOW",
      clubID: "리퀴드",
      startDate: "2024.11.20",
      endDate: "11.21",
      tag: "공연",
      category: "공연",
      photo: image9,
    },
  ];
// 1) show 데이터 가져오기 
  const [show, setShow] = useState([]);
  // const getShow = async () => {
  //   try {
  //     const res = await axios.get(`http://jinjigui.info:8080/attraction/list`);
  //     console.log("show 데이터 가져오기 성공");
  //     console.log(res.data.entireList);
  //     setShow(res.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }; 
  const getShow = async () => {
    try {
      const res = await axios.get("http://jinjigui.info:8080/attraction/list");
      console.log("show 데이터 가져오기 성공");
      console.log(res.data.entireList);
  
      const converted = res.data.entireList.map((item) => {
        const [startDate, endDate] = item.period.split(" - ");
  
        return {
          id: item.id,
          name: item.title,
          clubID: item.club,
          startDate: startDate,
          endDate: endDate,
          tag: item.tag,
          category: item.category || "기타",
          photo: item.img?.trim() || image1, // 이미지 없을 경우 기본값 대체
        };
      });
  
      setShow(converted);
    } catch (err) {
      console.error(err);
    }
  };
// 2) 페이지 로드되면 show값 불러옴

useEffect(() => {
  getShow();
}, []);   

//3) 가져온 데이터별 카테고리 별로 필터링
    // const filteredList =
    // selectedCategory === "전체"
    //   ? showList
    //   : showList.filter((item) => item.category === selectedCategory);
    const filteredList =
    selectedCategory === "전체"
        ? show
        : show.filter((item) => item.category === selectedCategory);


    return (
      <div className={styles.column}>
        <div className={styles.category}>
          {["전체", "공연", "즐길거리"].map((category, idx) => (
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
          {filteredList.map((item, index) => (
            <ShowCard key={`${item.title}-${item.clubID}-${index}`} show={item} className={styles.showCard}/>
          ))}
        </div>
      </div>
     
  );
}

export default ShowList;
