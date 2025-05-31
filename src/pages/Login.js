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
    // CSRF 방지를 위한 state 생성
    const state = Math.random().toString(36).substring(2);
    sessionStorage.setItem("oauth_state", state);

    // nonce 생성
    const nonce =
      Math.random().toString(36).substring(2) + Date.now().toString(36);

    // URL 파라미터 설정
    const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
    console.log("id: " + process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID);
    console.log("uri: " + process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI);
    console.log("id: " + process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID);

    // 환경변수에서 값을 가져와 URL에 추가
    authUrl.searchParams.append(
      "client_id",
      process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID
    );
    authUrl.searchParams.append(
      "redirect_uri",
      process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI
    );
    authUrl.searchParams.append("response_type", "id_token");
    authUrl.searchParams.append("scope", "email profile openid");
    authUrl.searchParams.append("nonce", nonce);
    authUrl.searchParams.append("access_type", "offline");
    authUrl.searchParams.append("prompt", "consent");
    authUrl.searchParams.append("state", state);

    window.location.href = authUrl.toString();
    // navigate(`/add-info`);
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
