import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Mypage.module.css";

function Mypage() {
  const navigate = useNavigate();
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

  return (
    <>
      <div className={styles.body}>
        <div className={styles.sidebar}>
          <div className={styles.account_info_box}>
            <div className={styles.account_title_box}>
              <div className={styles.account_title}>현재 로그인 계정</div>
            </div>
            <div className={styles.account}>22100159@handong.ac.kr</div>
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
                <div className={styles.detail_body}>김한동</div>
              </div>
              <div className={styles.detail_box}>
                <div className={styles.detail_head}>학번</div>
                <div className={styles.detail_body}>22100159</div>
              </div>
              <div className={styles.detail_box}>
                <div className={styles.detail_head}>연락처</div>
                <div className={styles.detail_body}>010-0000-0000</div>
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
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </div>
    </>
  );
}

export default Mypage;
