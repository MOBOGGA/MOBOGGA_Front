// src/pages/Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. 클라이언트 측 데이터 제거
    localStorage.removeItem("jwt");
    sessionStorage.clear(); // userName, stdId, phoneNum 등 모두 삭제

    alert("로그아웃 되었습니다.");
    navigate("/main");
  }, [navigate]);

  return <div>로그아웃 중입니다...</div>;
}

export default Logout;
