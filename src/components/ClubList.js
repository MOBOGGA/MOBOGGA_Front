import React,{useState} from "react";
import ClubCard from "./ClubCard";
import styles from "./styles/ClubList.module.css";

function ClubList() {
  //1) 카테고리 별 분류
  const [selectedCategory, setSelectedCategory] = useState("공연");

  const clubList = [
    // 공연
    { id: 1, name: "갓스펠로우", category: "공연" },
    { id: 2, name: "꾼들", category: "공연" },
    { id: 3, name: "두나미스", category: "공연" },
    { id: 4, name: "리베리", category: "공연" },
    { id: 5, name: "리퀴드", category: "공연" },
    { id: 6, name: "미르", category: "공연" },
    { id: 7, name: "소울", category: "공연" },
    { id: 8, name: "어메이징스토리", category: "공연" },
    { id: 9, name: "즉흥적새벽두시", category: "공연" },
    { id: 10, name: "피치파이브", category: "공연" },
    { id: 11, name: "하향", category: "공연" },
    { id: 12, name: "한동대학교응원단", category: "공연" },
    { id: 13, name: "한동오케스트라", category: "공연" },
    { id: 14, name: "한풍", category: "공연" },
    { id: 15, name: "Ammission", category: "공연" },
    { id: 16, name: "G.O.", category: "공연" },
    { id: 17, name: "MIC", category: "공연" },
    { id: 18, name: "NEO", category: "공연" },
    // 전시
    { id: 19, name: "CANVAS", category: "전시" },
    { id: 20, name: "HAC", category: "전시" },
    { id: 21, name: "VAM", category: "전시" },

    // 종교
    { id: 22, name: "비전선교단", category: "종교" },
    { id: 23, name: "오르", category: "종교" },
    { id: 24, name: "B2B", category: "종교" },
    { id: 25, name: "CCC", category: "종교" },
    { id: 26, name: "SFC", category: "종교" },

    // 체육
    { id: 27, name: "그랜드슬램", category: "체육" },
    { id: 28, name: "삼손", category: "체육" },
    { id: 29, name: "스윕(SWEEP)", category: "체육" },
    { id: 30, name: "차요차요", category: "체육" },
    { id: 31, name: "천풍해세", category: "체육" },
    { id: 32, name: "한검", category: "체육" },
    { id: 33, name: "한마지로", category: "체육" },
    { id: 34, name: "한방스윙스", category: "체육" },
    { id: 35, name: "홀리랜스", category: "체육" },
    { id: 36, name: "H.MILAN", category: "체육" },
    { id: 37, name: "Hoods", category: "체육" },
    { id: 38, name: "덥지니어스", category: "체육" },

    // 학술
    { id: 39, name: "펜통", category: "학술" },
    { id: 40, name: "DUDUS", category: "학술" },

    // 봉사
    { id: 41, name: "청소년자유학교", category: "봉사" },
    { id: 42, name: "팔레트", category: "봉사" },
    { id: 43, name: "피스메이커", category: "봉사" },
    { id: 44, name: "LAMP", category: "봉사" },

    // 전산
    { id: 45, name: "슬기짜기", category: "전산" },
    { id: 46, name: "CRA", category: "전산" },
    { id: 47, name: "GHOST", category: "전산" },
    ];


    const filteredList = clubList.filter((item) => item.category === selectedCategory);

  
  return (
    <>
      <div className={styles.column}>
        <div className={styles.category}>
          {["공연", "전시", "종교", "체육", "학술", "봉사", "전산"].map((category, idx) => (
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
            <ClubCard key={item.id} show={item} className={styles.showCard}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default ClubList;
