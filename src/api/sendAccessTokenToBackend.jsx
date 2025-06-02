<<<<<<< Updated upstream
<<<<<<< Updated upstream
// src/api/sendAccessTokenToBackend.js
import axios from "axios";

const sendAccessTokenToBackend = async (idToken, navigate) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_DB_URL}/api/oauth/google/session`,
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
    navigate("/main");
  } catch (error) {
    console.error("Login failed with error: ", error);
=======
=======
>>>>>>> Stashed changes
import axios from "axios";

const sendAccessTokenToBackend = async (idToken, setLoginCheck, navigate) => {
  console.log("🔥 sendAccessTokenToBackend 호출됨");
  try {
    //   axios.post("https://jinjigui.info/api/auth/google/session", null, {
    //     params: { credential: idToken },
    //   });

    const serverResponse = await axios.post(
      `http://jinjigui.info:8080/api/oauth/google/session`,
      {},
      {
        params: {
          credential: idToken,
        },
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // const request = await axios.post(
    //   "https://jinjigui.info/api/auth/login",
    //   { idToken },
    //   { headers: { "Content-Type": "application/json" }, withCredentials: true }
    // );

    // if (serverResponse.status === 200) {
    //   setLoginCheck(false); // 로그인 성공
    //   sessionStorage.setItem("idToken", idToken); // idToken 저장
    //   navigate("/"); // '/list'로 이동
    // } else {
    //   setLoginCheck(true); // 실패 시 로그인 상태 업데이트
    // }

    // 서버로부터의 응답 처리
    console.log("Login successful with server response:", serverResponse);
    console.log("📦 응답:", serverResponse.data);

    // sessionStorage에 값 저장
    sessionStorage.setItem("jwt", serverResponse.data.token);
    // sessionStorage.setItem("serverResponse", serverResponse.data.id);
    sessionStorage.setItem(
      "serverResponse:Authority",
      serverResponse.data.authority
    );
    // sessionStorage.setItem("serverResponse:UserName", serverResponse.data.userName);
    // sessionStorage.setItem("serverResponse:StdId", serverResponse.data.stdId);
    // sessionStorage.setItem("serverResponse:PhoneNum", serverResponse.data.phoneNum);
    // sessionStorage.setItem("serverResponse:Email", serverResponse.data.email);
    setLoginCheck(false);
    navigate("/"); // 혹은 "/main" 등 원하는 화면으로 이동
    return serverResponse.data;
  } catch (error) {
    console.error("Login failed with error:", error);
    setLoginCheck(true);
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    throw error;
  }
};

export default sendAccessTokenToBackend;
