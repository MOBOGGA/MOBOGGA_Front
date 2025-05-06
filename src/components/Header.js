import React from "react";
//import React, { useState, useEffect} from "react";
//import axios from "axios";

// import { useNavigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import styles from "./styles/Header.module.css";
import moboggaLogo from "../assets/Logo.svg";

function Header() {
  const navigate = useNavigate();
//  const location = useLocation(); // 현재 페이지 경로 가져오기
  

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={moboggaLogo} alt="MoboggaLogo" className="logoImg" onClick={() => navigate("/")}
          //onClick={() => {noLoginInfo === true ? navigate("/") : navigate("/hansum")}}
          />
      </div>

      <div className={styles.right}>
        <div className={styles.watching}>
          <span>볼거리</span>
        </div>

        <div className={styles.recruiting}>
          <span>리쿠르팅</span>
        </div>

        <div className={styles.club}>
          <span>동아리</span>
        </div>

        <div className={styles.login} onClick={() => navigate("/login")}>
          <span>로그인</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
