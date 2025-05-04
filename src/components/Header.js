import React from "react";
//import React, { useState, useEffect} from "react";
//import axios from "axios";

//import { useNavigate, useLocation } from "react-router-dom";
import styles from "./styles/Header.module.css";
import moboggaLogo from "../assets/Logo.svg";

function Header() {
//  const navigate = useNavigate();
//  const location = useLocation(); // 현재 페이지 경로 가져오기
  

  return (
    <header className={styles.header}>
      <div className="logo">
        <img src={moboggaLogo} alt="MoboggaLogo" className="logoImg" 
          //onClick={() => {noLoginInfo === true ? navigate("/") : navigate("/hansum")}}
          />
      </div>

    </header>
  );
}

export default Header;
