import React from "react";
import moduleName from "module";

function Show() {
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
                <span className="variable_Info"></span>
              </div>
              <div className="info_Box">
                <span className="fixed_Info">장소</span>
                <span className="variable_Info"></span>
              </div>
              <div className="info_Box">
                <span className="fixed_Info">날짜</span>
                <span className="variable_Info"></span>
              </div>
              <div className="info_Box">
                <span className="fixed_Info">러닝타임</span>
                <span className="variable_Info"></span>
              </div>
              <div className="info_Box">
                <span className="fixed_Info">담당자</span>
                <span className="variable_Info"></span>
              </div>
              <div className="info_Box">
                <span className="fixed_Info">공지</span>
                <span className="variable_Info"></span>
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
