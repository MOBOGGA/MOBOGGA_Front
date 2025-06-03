/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Mypage.module.css";
import MyReservCard from "../components/MyReservCard";

function Mypage() {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");

  const [formData, setFormData] = useState({
    userName: "",
    stdId: "",
    phoneNum: "",
    email: "",
  });

  const [isHoveringLogoutBtn, setIsHoveringLogoutBtn] = useState(false);
  const [isHoveringUpdateBtn, setIsHoveringUpdateBtn] = useState(false);

  const onMouseOverLogoutBtn = () => {
    setIsHoveringLogoutBtn(true);
  };

  const onMouseOutLogoutBtn = () => {
    setIsHoveringLogoutBtn(false);
  };

  const onMouseOverUpdateBtn = () => {
    setIsHoveringUpdateBtn(true);
  };

  const onMouseOutUpdateBtn = () => {
    setIsHoveringUpdateBtn(false);
  };

  const onClickLogoutBtn = () => {
    navigate(`/logout`);
  };

  const onClickProfileUpdateBtn = () => {
    navigate(`/mypage/update`);
  };

  const fetchUserProfile = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/mypage/update/${userId}`,
        {
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("사용자 정보를 불러오는데 실패했습니다.");
      }

      const userData = await response.json();
      console.log("User Data:", userData);

      // 서버에서 받은 데이터를 폼 데이터 형식에 맞게 변환
      setFormData({
        userName: userData.user.userName || "",
        email: userData.user.email || "",
        phoneNum: userData.user.phoneNum || "",
        stdId: userData.user.stdId || "",
      });
    } catch (error) {
      console.error("Error fetching user profile:", error);
      //   setError(error.message);
      // } finally {
      //   setIsLoading(false);
    }
  };

  const [myReservCards, setMyReservCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMyReservCards = async () => {
    console.log("getMyReservCards 함수 시작");
    try {
      const userId = sessionStorage.getItem("serverResponse");
      console.log("로딩 상태 설정: true");
      setIsLoading(true);
      setError(null);

      console.log("API 요청 시작");
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/mypage/reservation/${userId}`
      );
      console.log("API 응답 수신:", response.status);

      // if (!response.ok) {
      //   throw new Error('예매 내역을 불러오는데 실패했습니다.');
      // }

      console.log("응답 데이터 파싱 시작");
      const json = await response.json();
      console.log("파싱된 데이터:", json);

      // 데이터 검증 추가
      // if (!json || !json.user_reservation_list) {
      //   throw new Error('예매 내역 데이터 형식이 올바르지 않습니다.');
      // }

      console.log("예매 내역 데이터 설정:", json.user_reservation_list);
      setMyReservCards(json.user_reservation_list);
    } catch (err) {
      console.error("에러 발생:", err);
      setError(err.message);
      setMyReservCards([]); // 오류 시 빈 배열로 설정
    } finally {
      console.log("로딩 상태 설정: false");
      setIsLoading(false);
    }
  };

  // 사용자 정보 조회
  useEffect(() => {
    fetchUserProfile();
    getMyReservCards();
  }, [userId]);

  if (isLoading) {
    console.log("로딩 중 화면 렌더링");
    return (
      <>
        <div className={styles.loading}>로딩중...</div>
      </>
    );
  }

  // if (error) {
  //   console.log("에러 화면 렌더링:", error);
  //   return (
  //     <>
  //       <div className={styles.error_message}>
  //         error: {error}
  //         <button onClick={getMyReservCards} className={styles.retry_button}>
  //           다시 시도
  //         </button>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <div className={styles.body}>
        <div className={styles.sidebar}>
          <div className={styles.account_info_box}>
            <div className={styles.account_title_box}>
              <div className={styles.account_title}>현재 로그인 계정</div>
            </div>
            <div className={styles.account}>{formData.email}</div>
            <div
              className={
                isHoveringLogoutBtn
                  ? styles.LogoutBtnHover
                  : styles.LogoutBtnDefault
              }
              onClick={onClickLogoutBtn}
              onMouseOver={onMouseOverLogoutBtn}
              onMouseOut={onMouseOutLogoutBtn}
            >
              로그아웃
            </div>
          </div>
          <div className={styles.profile_info_box}>
            <div className={styles.profile_title_box}>
              <div className={styles.profile_title}>프로필</div>
            </div>
            <div className={styles.profile_detail_box}>
              <div className={styles.detail_box}>
                <div className={styles.detail_head}>이름</div>
                <div className={styles.detail_body}>{formData.userName}</div>
              </div>
              <div className={styles.detail_box}>
                <div className={styles.detail_head}>학번</div>
                <div className={styles.detail_body}>{formData.stdId}</div>
              </div>
              <div className={styles.detail_box}>
                <div className={styles.detail_head}>연락처</div>
                <div className={styles.detail_body}>{formData.phoneNum}</div>
              </div>
            </div>
          </div>
          <div
            className={
              isHoveringUpdateBtn
                ? styles.ProfileUpdateBtnHover
                : styles.ProfileUpdateBtnDefault
            }
            onClick={onClickProfileUpdateBtn}
            onMouseOver={onMouseOverUpdateBtn}
            onMouseOut={onMouseOutUpdateBtn}
          >
            프로필 정보 수정
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.reservlist_title}>공연 예매 내역</div>
          <div className={styles.reservlist_content}>
            {isLoading && <div className="loading">로딩중...</div>}
            {/* {error && (
              <div className="error-message">
                에러: {error}
                <button onClick={getMyReservCards} className="retry-button">
                  다시 시도
                </button>
              </div>
            )} */}
            {/* {myReservCards && myReservCards.length === 0 ? (
              <div className={styles.no_reserv}>예매 내역이 없습니다.</div>
            ) : (
              myReservCards.map((myReservCard) => {
                console.log("예매 카드 렌더링:", myReservCard.ticketNumber);
                console.log(myReservCard);
                return (
                  <div
                    key={myReservCard.ticketNumber}
                    className="myreservlist-page-content"
                  >
                    <MyReservCard show={myReservCard.show.id} />
                  </div>
                );
              })
            )} */}
            <MyReservCard />
            <MyReservCard />
            <MyReservCard />
            <MyReservCard />
            <MyReservCard />
            <MyReservCard />

          </div>
        </div>
      </div>
    </>
  );
}

export default Mypage;
