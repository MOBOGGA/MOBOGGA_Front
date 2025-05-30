import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles/Show.module.css";

import BACK from "../assets/ShowBackButton.svg";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

function Show() {
  const [show, setShow] = useState({});
  const [count, setCount] = useState(0);
  const [selectedSch, setSelectedSch] = useState(null);
  const navigate = useNavigate();
  const navigateToPrepage = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  // eslint-disable-next-line
  const shows = [
    {
      showId: 0,
      clubName: "어메이징 스토리",
      showName: "우리 집에 왜 왔니?",
      photo: "string",
      introductionLetter:
        "🎵우리 집에 왜 왔니 왜 왔니 왜 왔니?~ \n웃음꽃을 찾으러 왔단다 왔단다~ 🎵 \n코미디 맛집 어메이징 스토리가 돌아왔다!",
      location: "학관 102호",
      startDate: "2025-05-23",
      endDate: "2025-05-23",
      runtime: 0,
      managerInfo: "010-1234-5678(김이름)",
      noticeLetter:
        "*티켓은 공연 당일, 공연장 앞에서 수령하실 수 있습니다.\n*티켓 환불은 5월 19일 일요일(공연전주 일요일)까지만 가능합니다.\n*뚜껑있는 투명한 생수병을 제외한 모든 음식물은 반입이 금지됩니다.\n*꽃다발 및 음식무은 데스크에 상주해있는 스태프들이 보관해드립니다.\n*공연이 시작되면 출입이 불가합니다.(지연관객 입장 불가)",
      scheduleList: [
        {
          order: 1,
          date: "2025-05-23",
          time: {
            hour: 19,
            minute: 0,
            second: 0,
            nano: 0,
          },
          maxPeople: 5,
          cost: 4500,
          scheduleId: 0,
        },
      ],
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
  useEffect(() => {
    // 첫 번째 쇼를 기본으로 설정
    setShow(shows[0]);
  }, [shows]);

  const Minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const Plus = () => {
    if (show && count < show.maxTickets) {
      setCount(count + 1);
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.back_Div}>
        <button className={styles.back_Btn} onClick={navigateToPrepage}>
          <img src={BACK} className={styles.move_Back} alt="back" />
        </button>
      </div>
      <div className={styles.show_con}>
        <div className={styles.show_Intro}>
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
                  {show.clubName || "동아리 정보 없음"}
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
            <div
              className={styles.selectSch}
              onChange={(e) =>
                setSelectedSch(
                  shows?.schedules.find((s) => s.id === Number(e.target.value))
                )
              }
            >
              {Array.isArray(show.schedules) &&
                show.schedules.map((sch) => {
                  const isFull = sch.applyPeople >= sch.maxPeople;

                  return (
                    <label
                      className={`${styles.sch_Item} ${
                        isFull ? styles.disabled_Label : ""
                      }`}
                      key={sch.id}
                    >
                      <input
                        type="radio"
                        value={sch.id}
                        name="schedule"
                        disabled={isFull}
                        className={styles.ticket_Radio}
                      />
                      {sch.order}공: {sch.date} {sch.time} | {sch.cost}원 |{" "}
                      {isFull ? (
                        <span className={styles.disabled_Label}>매진</span>
                      ) : (
                        <span className={styles.people_Count}>
                          {sch.applyPeople}/{sch.maxPeople}
                        </span>
                      )}
                    </label>
                  );
                })}
            </div>
          </div>
          <div className={styles.ticket_Box}>
            <div className={styles.section}>구매 매수</div>
            <div className={styles.ticket_Btns}>
              <button className={styles.ticket_Btn} onClick={Minus}>
                -
              </button>
              <span>{count}</span>
              <button className={styles.ticket_Btn} onClick={Plus}>
                +
              </button>
            </div>
          </div>
          <div className={styles.ticket_Box}>
            <div className={styles.section}>총 금액</div>
            <div className={styles.total}>
              {(selectedSch?.schedules.cost || 0) * count}원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
