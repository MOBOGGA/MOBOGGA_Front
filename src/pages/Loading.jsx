// src/pages/Loading.jsx
import React, { useEffect, useState } from "react";
import sendAccessTokenToBackend from "../api/sendAccessTokenToBackend";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Loading.module.css";

const Loading = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parsedHash = new URLSearchParams(window.location.hash.substring(1));
        const idToken = parsedHash.get("id_token");
        const state = parsedHash.get("state");

        const savedState = sessionStorage.getItem("oauth_state");

        if (state !== savedState) {
          throw new Error("CSRF 방지를 위한 상태 값이 일치하지 않습니다.");
        }

        if (!idToken) {
          throw new Error("세션이 만료되었습니다. 로그인을 다시 해주세요.");
        }

        console.log("받은 idToken:", idToken);

        // 서버로 전송
        await sendAccessTokenToBackend(idToken, navigate);
      } catch (error) {
        console.error("에러 발생:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div id="loading">
      {error ? (
        <div className={styles.error_text}>{error}</div>
      ) : isLoading ? (
        <div className={styles.loading_text}>로딩 중...</div>
      ) : null}
    </div>
  );
};

export default Loading;
