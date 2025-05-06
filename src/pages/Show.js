import React from "react";
import { useState } from "react";
import axios from "axios";

function Show() {
  const [show, setShow] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(``);
      console.log("API 응답 데이터:", response.data);
      if (response.data && response.data.show) {
        setShow(response.data.show);
        console.log("API 전체", show);
      } else {
        console.error("API에 show 데이더가 없습니다.");
        setShow(null);
      }
    } catch (error) {
      console.error("Fetch Error: ", error);
      setShow(null);
    }
  };

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
                  {show || "소개글 정보 없음"}
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
                  {show || "담당자 정보 없음"}
                </span>
              </div>
              <div className="info_Box">
                <span className="fixed_Info">공지</span>
                <span className="variable_Info">
                  {show || "공지 정보 없음"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="show_ticket">
        <div className="ticket_Box">
          <div className="section">공연 회차 선택</div>
          <select className="choose_ticket_Box">
            <option value="">회차를 선택해주세요</option>
          </select>
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
