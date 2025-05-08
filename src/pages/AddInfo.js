import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/AddInfo.module.css";
import LoginLogo from "../assets/LoginLogo.svg";

function AddInfo() {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const onMouseOver = () => {
    setIsHovering(true);
  };

  const onMouseOut = () => {
    setIsHovering(false);
  };

  const onClickGoogleLoginBtn = () => {
    navigate(`/구글 로그인 페이지`);
  };
  return (
    <>
      <div className={styles.body}>
        <div className={styles.logo_box}>
          <img className={styles.login_logo} src={LoginLogo} alt="login_logo" />
        </div>
        <div className={styles.words_box}>
          <div className={styles.words}>
            모보까를 처음 이용하시나요? <br />
            추가 정보 기입을 통해 회원가입을 진행해주세요!
          </div>
        </div>
        <div className={styles.info_box}>
          <div className={styles.infos}>
            <div className={styles.info} id={styles.user_name_box}>
              <div className={styles.info_head}>이름</div>
              <div className={styles.info_body}><input placeholder="이름"></input></div>
            </div>
            <div className={styles.info} id={styles.std_num_box}>
              <div className={styles.info_head}>학번</div>
              <div className={styles.info_body}><input placeholder="학번 8자리"></input></div>
            </div>
            <div className={styles.info} id={styles.phone_num_box}>
              <div className={styles.info_head}>전화번호</div>
              <div className={styles.info_body}><input placeholder="010-0000-0000"></input></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddInfo;
