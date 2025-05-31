import React from "react";
//import React, { useState, useEffect} from "react";
//import axios from "axios";

import { useNavigate ,useLocation} from "react-router-dom";

import styles from "./styles/Header.module.css";
import moboggaLogo from "../assets/Logo.svg";

import header1 from "../assets/header/1.svg";
import header2 from "../assets/header/2.svg";
import header3 from "../assets/header/3.svg";

//import profile_btn from "../assets/temp/profile_logo.svg"


function Header() {
  // 1) 경로이동, 현재 페이지 가져오기 
  const navigate = useNavigate();
  const location = useLocation(); 

  return (
    <header className={styles.header}>
      <div className={styles.logo}>

        <img
          src={moboggaLogo}
          alt="MoboggaLogo"
          className="logoImg"
          onClick={() => navigate("/")}

          //onClick={() => {noLoginInfo === true ? navigate("/") : navigate("/hansum")}}
        />
      </div>

      <div className={styles.right}>
        <div className={location.pathname === "/main" ? styles.watching : styles.back} onClick={() => navigate("/main")}>
          <img src={header1} alt ="" className={location.pathname === "/main" ? styles.background : styles.nan}/>
          <span className={location.pathname === "/main" ? styles.fronttext : ""}>볼거리</span>
        </div>

        <div className={location.pathname === "/recruiting" ? styles.recruiting : styles.back} onClick={() => navigate("/recruiting")}>
          <img src={header2} alt ="" className={location.pathname === "/recruiting" ? styles.background : styles.nan}/>
          <span className={location.pathname === "/recruiting" ? styles.fronttext : ""}>리크루팅</span>
        </div>

        <div className={location.pathname === "/clubs" ? styles.club : styles.back} onClick={() => navigate("/clubs")}>
          <img src={header3} alt ="" className={location.pathname === "/clubs" ? styles.background : styles.nan}/>
          <span className={location.pathname === "/clubs" ? styles.fronttext : ""}>동아리</span>
        </div>

        <div className={styles.login} onClick={() => navigate("/login")}>
          <span>로그인</span>
        </div>
        <div className={styles.profile_btn} onClick={() => navigate("/mypage")}>
          {/* <img src={profile_btn} alt="프로필 버튼" /> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
