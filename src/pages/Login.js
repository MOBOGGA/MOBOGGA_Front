import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Login.module.css";
import LoginLogo from "../assets/LoginLogo.svg";
import GoogleLoginBtnDefault from "../assets/GoogleLoginBtn-Default.svg";
import GoogleLoginBtnHover from "../assets/GoogleLoginBtn-Hover.svg";

function Login() {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const onMouseOver = () => {
    setIsHovering(true);
  };

  const onMouseOut = () => {
    setIsHovering(false);
  };

  const onClickGoogleLoginBtn = () => {
    navigate(`/add-info`);
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.logo_box}>
          <img className={styles.login_logo} src={LoginLogo} alt="login_logo" />
        </div>
        <div className={styles.words_box}>
          <div className={styles.words}>
            교내 공연 정보와 동아리 정보 확인은
            <br />
            모두 <span className={styles.highlight_word}>모보까</span>로
            시작하세요!
            <br />
            로그인을 하시면 더 많은 모보까 서비스를
            <br />
            이용하실 수 있습니다.
          </div>
        </div>
        <div>
          <img
            className={styles.google_login_btn}
            src={isHovering ? GoogleLoginBtnHover : GoogleLoginBtnDefault}
            alt="google_login_btn"
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onClick={onClickGoogleLoginBtn}
          />
        </div>
      </div>
    </>
  );
}

export default Login;
