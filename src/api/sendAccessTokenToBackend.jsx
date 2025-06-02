// src/api/sendAccessTokenToBackend.js
import axios from "axios";

const sendAccessTokenToBackend = async (idToken, navigate) => {
  console.log("🔥 sendAccessTokenToBackend 호출됨");
  try {
    const serverResponse = await axios.post(
      `${process.env.REACT_APP_DB_URL}/api/oauth/google/session`,
      { credential: idToken },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    console.log("📦 응답:", serverResponse.data);

    // sessionStorage에 JWT 저장
  
    sessionStorage.setItem("jwt", serverResponse.data.token);
    sessionStorage.setItem("serverResponse:Authority", serverResponse.data.authority);

    navigate("/"); // 메인으로 이동
    return serverResponse.data;
  } catch (error) {
    console.error("Login failed with error:", error);
    throw error;
  }
};

export default sendAccessTokenToBackend;
