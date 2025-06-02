import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/AddInfo.module.css";
import LoginLogo from "../assets/LoginLogo.svg";
import FilledLongBtn from "../components/FilledLongBtn";

function AddInfo() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  //eslint-disable-next-line
  const [error, setError] = useState(null);

  const userId = sessionStorage.getItem("serverResponse");
  const [formData, setFormData] = useState({
    userName: "",
    phoneNum: "",
    stdId: "",
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(
          `https://jinjigui.info:443/mypage/update/${userId}`,
          {
            credentials: "include",
          }
        );
        if (!response.ok) {
          throw new Error("사용자 정보를 불러오는데 실패했습니다.");
        }

        const userData = await response.json();
        console.log("User Data:", userData); // 이 줄 추가

        // 서버에서 받은 데이터를 폼 데이터 형식에 맞게 변환
        setFormData({
          userName: userData.user.userName || "",
          phoneNum: userData.user.phoneNum || "",
          stdId: userData.user.stdId || "",
        });
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]); // 컴포넌트 마운트 시 한 번만 실행
  // 사용자 정보 저장 함수
  // 이 함수는 사용자가 입력한 정보를 서버에 저장하고, 세션 스토리지에 저장한 후 메인 페이지로 이동합니다.
  // 이 함수는 폼 제출 이벤트를 처리합니다.
  // e.preventDefault()를 사용하여 기본 폼 제출 동작을 방지합니다.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // 상태 업데이트
    if (name === "userName") {
      setName(value);
    } else if (name === "stdId") {
      setStudentId(value);
    } else if (name === "phoneNum") {
      setPhoneNum(value);
    }
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

      alert("프로필이 성공적으로 저장되었습니다.");
      // 세션 스토리지에 사용자 정보 저장
      sessionStorage.setItem("userName", formData.userName);
      sessionStorage.setItem("phoneNum", formData.phoneNum);
      sessionStorage.setItem("stdId", formData.stdId);
      // 메인 페이지로 이동
      navigate("/main");
    } catch (error) {
      console.error("Error saving profile:", error);
      alert(error.message || "저장에 실패했습니다.");
    }
  };

  if (isLoading) {
    return <div className={styles.loading}>로딩 중...</div>;
  }

  // if (error) {
  //   return (
  //     <div className={styles.error}>
  //       <div className={styles.error_message}></div>에러: {error}
  //     </div>
  //   );
  // }

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
                  value={formData.userName}
                  onChange={(e) => handleInputChange({ userName: e.target.value })}
                />
              </div>
            </div>
            <div className={styles.info} id={styles.std_num_box}>
              <div className={styles.info_head}>학번</div>
              <div className={styles.info_body}>
                <input
                  placeholder="학번 8자리"
                  value={formData.stdId}
                  onChange={(e) => handleInputChange({ stdId: e.target.value })}
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
                  value={formData.phoneNum}
                  onChange={(e) => handleInputChange({ phoneNum: e.target.value })}
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
            if (!name || !studentId || !phoneNum) {
              alert("모든 정보를 입력해주세요.");
              return;
            }
            console.log({ name, studentId, phoneNum });
            navigate("/main");
          }}
        />
        <div className={styles.caution}>
          *모보까에 가입함으로써 개인정보 수집에 관해 동의하게 됩니다
        </div>
      </div>
    </>
  );
}

export default AddInfo;
