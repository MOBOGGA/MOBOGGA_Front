import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/UpdateProfile.module.css";
import UpdateProfileWord from "../assets/UpdateProfileWord.svg";

function UpdateProfile() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const userId = localStorage.getItem("userId");

  const [formData, setFormData] = useState({
    userName: "",
    stdId: "",
    phoneNum: "",
  });

  const [isHoveringCancelBtn, setIsHoveringCancelBtn] = useState(false);
  const [isHoveringConfirmBtn, setIsHoveringConfirmBtn] = useState(false);

  const onMouseOverCancelBtn = () => {
    setIsHoveringCancelBtn(true);
  };

  const onMouseOutCancelBtn = () => {
    setIsHoveringCancelBtn(false);
  };

  const onMouseOverConfirmBtn = () => {
    setIsHoveringConfirmBtn(true);
  };

  const onMouseOutConfirmBtn = () => {
    setIsHoveringConfirmBtn(false);
  };

  const onClickCancelBtn = () => {
    if (window.confirm("취소하시겠습니까?") === true) {
      navigate("/mypage");
    }
  };

  const onClickConfirmBtn = () => {
    if (window.confirm("정보를 수정하시겠습니까?") === true) {
      //saveProfile();
    }
  };

  // 사용자 정보 조회
  useEffect(() => {
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
          stdId: userData.user.stdId || "",
          phoneNum: userData.user.phoneNum || "",
        });
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]); // 컴포넌트 마운트 시 한 번만 실행

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // eslint-disable-next-line
  const saveProfile = async (e) => {
    e.preventDefault();

    // 데이터 유효성 검사
    if (!formData.userName?.toString()) {
      alert("이름을 입력해주세요.");
      return;
    }

    if (!formData.phoneNum?.toString()) {
      alert("전화번호를 입력해주세요.");
      return;
    }

    if (!formData.stdId?.toString()) {
      alert("학번을 입력해주세요.");
      return;
    }

    try {
      const response = await fetch(
        `https://jinjigui.info:8080/mypage/save/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            user: {
              userName: formData.userName?.toString() || "",
              phoneNum: formData.phoneNum?.toString() || "",
              stdId: formData.stdId?.toString() || "",
            },
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "저장에 실패했습니다.");
      }

      await alert("정보 수정이 완료되었습니다.");
      window.location.reload();
    } catch (error) {
      console.error("Error saving profile:", error);
      alert(error.response.data.message || "저장에 실패했습니다");
    }
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  // if (error) {
  //   return <div>에러: {error}</div>;
  // }

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
                <input value={formData.userName} onChange={handleInputChange} />
              </div>
            </div>
            <div className={styles.info} id={styles.std_num_box}>
              <div className={styles.info_head}>학번</div>
              <div className={styles.info_body}>
                <input value={formData.stdId} onChange={handleInputChange} />
              </div>
            </div>
            <div className={styles.info} id={styles.phone_num_box}>
              <div className={styles.info_head}>전화번호</div>
              <div className={styles.info_body}>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phoneNum}
                  onChange={handleInputChange}
                  pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                  maxLength="13"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button_box}>
          <div
            className={styles.button}
            id={
              isHoveringCancelBtn
                ? styles.cancel_button_hover
                : styles.cancel_button
            }
            onMouseOver={onMouseOverCancelBtn}
            onMouseOut={onMouseOutCancelBtn}
            onClick={onClickCancelBtn}
          >
            <div className={styles.button_text} id={styles.cancel_button_text}>
              취소
            </div>
          </div>
          <div
            className={styles.button}
            id={
              isHoveringConfirmBtn
                ? styles.confirm_button_hover
                : styles.confirm_button
            }
            onMouseOver={onMouseOverConfirmBtn}
            onMouseOut={onMouseOutConfirmBtn}
            onClick={onClickConfirmBtn}
          >
            <div className={styles.button_text} id={styles.confirm_button_text}>
              확인
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;
