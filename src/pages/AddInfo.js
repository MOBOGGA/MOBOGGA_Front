import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/AddInfo.module.css";
import LoginLogo from "../assets/LoginLogo.svg";
import FilledLongBtn from "../components/FilledLongBtn";

function AddInfo() {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
              <div className={styles.info_body}>
                <input
                  placeholder="이름"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.info} id={styles.std_num_box}>
              <div className={styles.info_head}>학번</div>
              <div className={styles.info_body}>
                <input
                  placeholder="학번 8자리"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.info} id={styles.phone_num_box}>
              <div className={styles.info_head}>전화번호</div>
              <div className={styles.info_body}>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="010-0000-0000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                  maxLength="13"
                />
              </div>
            </div>
          </div>
        </div>
        <FilledLongBtn
          value="모보까 시작하기"
          onClick={() => {
            if (!name || !studentId || !phoneNumber) {
              alert("모든 정보를 입력해주세요.");
              return;
            }
            // 등록 로직
            console.log({ name, studentId, phoneNumber });
            navigate("/main");
          }}
        />
      </div>
    </>
  );
}

export default AddInfo;
