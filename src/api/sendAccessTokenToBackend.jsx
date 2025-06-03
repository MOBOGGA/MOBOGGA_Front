// src/api/sendAccessTokenToBackend.js
import axios from "axios";

const sendAccessTokenToBackend = async (idToken, navigate) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/oauth/google/session`,
      { credential: idToken },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // 쿠키 필요시
      }
    );
    const jwt = response.data.token;
    localStorage.setItem("jwt", jwt); // 저장 후 라우팅
    navigate("/loading");
  } catch (error) {
    console.error("Login failed with error: ", error);
    throw error;
  }
};

export default sendAccessTokenToBackend;
