import React, {useState} from "react";
import styles from "./styles/UpdateProfile.module.css";
import UpdateProfileWord from "../assets/UpdateProfileWord.svg";

function UpdateProfile() {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <div className={styles.body}>
        <div className={styles.title_box}>
          <div className={styles.title}>
            <img src={UpdateProfileWord} alt="프로필 정보 수정" />
          </div>
        </div>
        <div className={styles.info_box}>
          <div className={styles.infos}>
            <div className={styles.info} id={styles.user_name_box}>
              <div className={styles.info_head}>이름</div>
              <div className={styles.info_body}>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.info} id={styles.std_num_box}>
              <div className={styles.info_head}>학번</div>
              <div className={styles.info_body}>
                <input
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
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                  maxLength="13"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button_box}>
          <div className={styles.button} id={styles.cancel_button}>
            <div className={styles.button_text} id={styles.cancel_button_text}>취소</div>
          </div>
          <div className={styles.button} id={styles.confirm_button}>
            <div className={styles.button_text} id={styles.confirm_button_text}>확인</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;
