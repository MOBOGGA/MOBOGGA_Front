import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles/Show.module.css";

import BACK from "../assets/ShowBackButton.svg";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

function Show() {
  const [show, setShow] = useState({});
  const [count, setCount] = useState({});
  const navigate = useNavigate();
  const navigateToPrepage = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  useEffect(() => {
    // 첫 번째 쇼를 기본으로 설정
    setShow(shows[0]);
  }, []);

  const Plus = () => {
    if (show && count < show.maxTickets) {
      setCount(count + 1);
    }
  };

  // clubs.js
  const clubs = [
    {
      id: 1,
      userId: "user01",
      photo: "club1.jpg",
      name: "뮤지컬동아리",
      instaUrl: "https://instagram.com/musical",
      kakaoUrl: "https://open.kakao.com/musical",
      youtubeUrl: "https://youtube.com/musical",
      url: "https://musicalclub.com",
    },
  ];

  const shows = [
    {
      id: 1,
      clubId: 1,
      name: "봄날의 뮤지컬",
      photo: "../assets/bannerTest/1.png",
      introductionLetter:
        "🎵우리 집에 왜 왔니 왜 왔니 왜 왔니?~\n웃음꽃을 찾으러 왔단다 왔단다~ 🎵\n코미디 맛집 어메이징 스토리가 돌아왔다!",
      noticeLetter:
        "*티켓은 공연 당일, 공연장 앞에서 수령하실 수 있습니다.\n *티켓 환불은 5월 19일 일요일(공연전주 일요일)까지만 가능합니다.\n*뚜껑있는 투명한 생수병을 제외한 모든 음식물은 반입이 금지됩니다.\n*꽃다발 및 음식무은 데스크에 상주해있는 스태프들이 보관해드립니다.\n*공연이 시작되면 출입이 불가합니다.(지연관객 입장 불가)",
      location: "대강당 A",
      maxTickets: 200,
      account: "123-456-789",
      runtime: 120,
      startDate: "2025-06-01",
      endDate: "2025-06-02",
      postDate: "2025-05-01",
      schedules: [
        {
          id: 1, // 동일 공연 내에서는 아이디 같아야 함, key가 id여서.
          showId: 1,
          order: 1,
          date: "2025-06-01",
          time: "18:00",
          cost: 5000,
          maxPeople: 100,
          applyPeople: 85,
        },
        {
          id: 1,
          showId: 1,
          order: 2,
          date: "2025-06-02",
          time: "14:00",
          cost: 5000,
          maxPeople: 100,
          applyPeople: 95,
        },
        {
          id: 1,
          showId: 2,
          order: 3,
          date: "2025-06-10",
          time: "19:00",
          cost: 3000,
          maxPeople: 80,
          applyPeople: 70,
        },
      ],
    },
    {
      id: 2,
      clubId: 2,
      name: "여름 밤의 연극",
      photo: "show2.jpg",
      introductionLetter: "여름밤을 배경으로 한 연극",
      noticeLetter: "공연 중 사진 촬영 금지",
      location: "소극장 B",
      maxTickets: 150,
      account: "987-654-321",
      runtime: 90,
      startDate: "2025-06-10",
      endDate: "2025-06-11",
      postDate: "2025-05-05",
    },
  ];

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(``);
  //     console.log("API 응답 데이터:", response.data);
  //     if (response.data && response.data.show) {
  //       setShow(response.data.show);
  //       console.log("API 전체", show);
  //     } else {
  //       console.error("API에 show 데이더가 없습니다.");
  //       setShow(null);
  //     }
  //   } catch (error) {
  //     console.error("Fetch Error: ", error);
  //     setShow(null);
  //   }
  // };

  return (
    <div className={styles.wrap}>
      <div className={styles.show_Intro}>
        <div className={styles.back_Div}>
          <button className={styles.back_Btn} onClick={navigateToPrepage}>
            <img src={BACK} className={styles.move_Back} alt="back" />
          </button>
        </div>
        <div className={styles.intro_Info}>
          <div className={styles.show_Top}>공연정보</div>
          <div className={styles.intro_con}>
            <img
              src="../assets/bannerTest/1.png"
              className={styles.show_Pic}
              alt="show_IMG"
            />
            <div className={styles.show_Info}>
              <div className={styles.title}>
                {/* {show.name || "타이틀 정보 없음"} */}
                우리 집에 왜 왔니?
              </div>
              <div className={styles.club}>
                {/* {clubs.name || "동아리 정보 없음"} */}
                어메이징스토리
              </div>
              <div className={styles.infos}>
                <div className={styles.info_Box}>
                  <span className={styles.fixed_Info}>소개글</span>
                  <span className={styles.variable_Info}>
                    {show.introductionLetter || "소개글 정보 없음"}
                  </span>
                </div>
                <div className={styles.info_Box}>
                  <span className={styles.fixed_Info}>장소</span>
                  <span className={styles.variable_Info}>
                    {/* {show.location || "장소 정보 없음"} */}학관 102호
                  </span>
                </div>
                <div className={styles.info_Box}>
                  <span className={styles.fixed_Info}>날짜</span>
                  <span className={styles.variable_Info}>
                    {/* {show.startDate || "시작 날짜 정보 없음"} -
                    {show.endDate || "끝 날짜 정보 없음"} */}
                    2025.05.23 - 2025.05.25
                  </span>
                </div>
                <div className={styles.info_Box}>
                  <span className={styles.fixed_Info}>러닝타임</span>
                  <span className={styles.variable_Info}>
                    {/* {show.runtime || "러닝타임 정보 없음"}분 */}
                    90분
                  </span>
                </div>
                <div className={styles.info_Box}>
                  <span className={styles.fixed_Info}>담당자</span>
                  <span className={styles.variable_Info}>
                    {/* {clubs.userId || "담당자 정보 없음"} */}
                    010-1234-5678(김이름)
                  </span>
                </div>
                <div className={styles.info_Box}>
                  <span className={styles.fixed_Info}>공지</span>
                  <span className={styles.variable_Info}>
                    {show.noticeLetter || "공지 정보 없음"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.show_ticket}>
        <div className={styles.ticket_Box}>
          <div className={styles.section}>공연 회차 선택</div>
          {Array.isArray(show.schedules) &&
            show.schedules.map((sch) => (
              <label key={sch.id}>
                <input
                  type="radio"
                  value={sch.id}
                  name={sch.id}
                  disabled={!sch.applyPeople}
                  className={styles.ticket_Radio}
                />
                {sch.order}공: {sch.date} {sch.time} | {sch.cost}원 |{" "}
                {sch.applyPeople}/{sch.maxPeople}
              </label>
            ))}
        </div>
        <div className={styles.ticket_Box}>
          <div className={styles.section}>구매 매수</div>
        </div>
        <div className={styles.ticket_Box}>
          <div className={styles.section}>총 금액</div>
        </div>
      </div>
    </div>
  );
}

export default Show;
