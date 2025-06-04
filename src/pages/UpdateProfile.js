import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/UpdateProfile.module.css";
import UpdateProfileWord from "../assets/UpdateProfileWord.svg";

function UpdateProfile() {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    userName: "",
    stdId: "",
    phoneNum: "",
  });

  const [isHoveringCancelBtn, setIsHoveringCancelBtn] = useState(false);
  const [isHoveringConfirmBtn, setIsHoveringConfirmBtn] = useState(false);

  // 마우스 오버 효과 핸들러
  const onMouseOverCancelBtn = () => setIsHoveringCancelBtn(true);
  const onMouseOutCancelBtn = () => setIsHoveringCancelBtn(false);
  const onMouseOverConfirmBtn = () => setIsHoveringConfirmBtn(true);
  const onMouseOutConfirmBtn = () => setIsHoveringConfirmBtn(false);

  const onClickCancelBtn = () => {
    if (window.confirm("취소하시겠습니까?")) {
      navigate("/mypage");
    }
  };

  const onClickConfirmBtn = () => {
    if (window.confirm("정보를 수정하시겠습니까?")) {
      saveProfile();
    }
  };

  // 사용자 정보 조회
  useEffect(() => {
    if (!token) {
      alert("로그인이 필요한 기능입니다.");
      navigate("/login");
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/mypage/student/profile/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("사용자 정보를 불러오는데 실패했습니다.");
        }

        const userData = await response.json();
        console.log("User Data:", userData);

        setFormData({
          userName: userData.name || "",
          stdId: userData.studentId?.toString() || "",
          phoneNum: userData.phoneNumber || "",
        });
      } catch (error) {
        console.error("Error fetching user profile:", error);
        alert("사용자 정보를 불러오는 데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [token, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveProfile = async () => {
    if (!formData.userName?.trim()) {
      alert("이름을 입력해주세요.");
      return;
    }

    if (!formData.stdId?.trim()) {
      alert("학번을 입력해주세요.");
      return;
    }

    if (!formData.phoneNum?.trim()) {
      alert("전화번호를 입력해주세요.");
      return;
    }

    if (!/^\d{3}-\d{4}-\d{4}$/.test(formData.phoneNum)) {
      alert("전화번호 형식을 확인해주세요. 예: 010-1234-5678");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/mypage/student/profile/`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.userName,
            phoneNumber: formData.phoneNum,
            studentId: formData.stdId,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "저장에 실패했습니다.");
      }

      alert("정보 수정이 완료되었습니다.");
      navigate("/mypage");
    } catch (error) {
      console.error("Error saving profile:", error);
      alert(error.message || "저장에 실패했습니다.");
    }
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
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
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.info} id={styles.std_num_box}>
            <div className={styles.info_head}>학번</div>
            <div className={styles.info_body}>
              <input
                name="stdId"
                value={formData.stdId}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.info} id={styles.phone_num_box}>
            <div className={styles.info_head}>전화번호</div>
            <div className={styles.info_body}>
              <input
                type="tel"
                name="phoneNum"
                id="phone"
                placeholder="010-0000-0000"
                pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                maxLength="13"
                value={formData.phoneNum}
                onChange={handleInputChange}
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
  );
}

export default UpdateProfile;
