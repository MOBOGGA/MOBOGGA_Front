import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";

function Show() {
  const [show, setShow] = useState({});
  const [count, setCount] = useState({});

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
    {
      id: 2,
      userId: "user02",
      photo: "club2.jpg",
      name: "연극동아리",
      instaUrl: "https://instagram.com/drama",
      kakaoUrl: "https://open.kakao.com/drama",
      youtubeUrl: "https://youtube.com/dramaclub",
      url: "https://dramaclub.com",
    },
  ];

  const shows = [
    {
      id: 1,
      clubId: 1,
      name: "봄날의 뮤지컬",
      photo: "show1.jpg",
      introductionLetter: "봄을 주제로 한 뮤지컬",
      noticeLetter: "공연 시간 엄수 바랍니다.",
      location: "대강당 A",
      maxTickets: 200,
      account: "123-456-789",
      runtime: 120,
      startDate: "2025-06-01",
      endDate: "2025-06-02",
      postDate: "2025-05-01",
      schedules: [
        {
          id: 1,
          showId: 1,
          order: 1,
          date: "2025-06-01",
          time: "18:00",
          cost: 5000,
          maxPeople: 100,
          applyPeople: 85,
        },
        {
          id: 2,
          showId: 1,
          order: 2,
          date: "2025-06-02",
          time: "14:00",
          cost: 5000,
          maxPeople: 100,
          applyPeople: 95,
        },
        {
          id: 3,
          showId: 2,
          order: 1,
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
    <div>
      <div className="show_Intro">
        <div className="intro_Top"></div>
        <div className="intro_Info">
          <img className="show_Pic" alt="show_IMG"></img>
          <div className="show_Info">
            <div className="title"></div>
            <div className="club"></div>
            <div className="infos">
              <div className="info_Box">
                <span className="fixed_Info">소개글</span>
                <span className="variable_Info">
                  {show.introductionLetter || "소개글 정보 없음"}
                </span>
              </div>
              <div className="info_Box">
                <span className="fixed_Info">장소</span>
                <span className="variable_Info">
                  {show.location || "장소 정보 없음"}
                </span>
              </div>
              <div className="info_Box">
                <span className="fixed_Info">날짜</span>
                <span className="variable_Info">
                  {show.startDate || "시작 날짜 정보 없음"} -
                  {show.endDate || "끝 날짜 정보 없음"}
                </span>
              </div>
              <div className="info_Box">
                <span className="fixed_Info">러닝타임</span>
                <span className="variable_Info">
                  {show.runtime || "러닝타임 정보 없음"}분
                </span>
              </div>
              <div className="info_Box">
                <span className="fixed_Info">담당자</span>
                <span className="variable_Info">
                  {clubs.userId || "담당자 정보 없음"}
                </span>
              </div>
              <div className="info_Box">
                <span className="fixed_Info">공지</span>
                <span className="variable_Info">
                  {show.noticeLetter || "공지 정보 없음"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="show_ticket">
        <div className="ticket_Box">
          <div className="section">공연 회차 선택</div>
          {Array.isArray(show.schedules) &&
            show.schedules.map((sch) => (
              <div key={sch.id}>
                <input
                  type="radio"
                  value={sch.id}
                  name={sch.id}
                  disabled={!sch.applyPeople}
                  className="ticket_Radio"
                />
                {sch.order}공: {sch.date} {sch.time} | {sch.cost}원 |{" "}
                {sch.applyPeople}/{sch.maxPeople}
              </div>
            ))}
        </div>
        <div className="ticket_Box">
          <div className="section">구매 매수</div>
        </div>
        <div className="ticket_Box">
          <div className="section">총 금액</div>
        </div>
      </div>
    </div>
  );
}

export default Show;
