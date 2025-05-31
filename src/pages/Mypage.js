import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Mypage.module.css";

import poster from "../assets/mainTest/3.png";

function Mypage() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

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

  // 사용자 정보 조회
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(
          `https://jinjigui.info:8080/mypage/update/${userId}`,
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

    fetchUserProfile();
  }, [userId]);

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
          <div className={styles.card}>
            <div className={styles.card_img_box}>
              <img className={styles.card_img} src={poster} alt="공연 이미지" />
            </div>
            <div className={styles.card_text_box}>
              <div className={styles.card_title}>우리 집에 왜 왔니?</div>
              <div className={styles.card_info_box}>
                <div className={styles.card_content}>
                  <div className={styles.card_info_header}>1공: </div>
                  <div className={styles.card_date}>2025.05.23(금) 19시 00분</div>
                </div>
                <div className={styles.card_content}>
                  <div className={styles.card_info_header}>장소: </div>
                  <div className={styles.card_place}>학관 102호</div>
                </div>
                <div className={styles.card_content}>
                  <div className={styles.card_info_header}>담당자: </div>
                  <div className={styles.card_manager}>010-1234-5678(김이름)</div>
                </div>
                <div className={styles.card_content}>
                  <div className={styles.card_info_header}>계좌번호: </div>
                  <div className={styles.card_account}>
                    ㅇㅇ은행 0000-0000-0000-00
                  </div>
                </div>
                <div className={styles.ticket_info}>
                  <div className={styles.ticket_num}>4매</div>
                  <div className={styles.ticket_price}>18000원</div>
                  <div className={styles.deposit_status}>미입금</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </div>
    </>
  );
}

export default Mypage;
