import React from "react";
import styles from "./styles/ClubDetail.module.css";

import insta from "../assets/icons/snsicons.svg";
import youtube from "../assets/icons/youtubeicons.svg";
import kakao from "../assets/icons/kakao.svg"; 
import link from "../assets/icons/linkicons.svg"; 

import testImg from "../assets/recruitingTest/img1.png";

import EventCard from "../components/ClubDetail/EventCard";

function ClubDetail() {

  const clubList = {
    
      clubId: 1,
      clubName: "MIC",
      photo: testImg,
      mandatorySemesters: "연속 4학기",
      content:
        "MIC는 Motion In Christ의 약자로 한동대 학생들로 구성된 춤을 통해 하나님께 영광 돌리는 청소년 사역단체입니다. 힙합, 왁킹, 락킹 등 다양한 장르를 접할 수 있으며, 정기공연과 축제, 태국 선교 등도 진행합니다. 주님 안에서 가장 아름다운 청춘의 시간을 보내고 싶다면 MIC에 오세요!",
      instaUrl: "https://www.instagram.com/motioninchrist_official",
      youtubeUrl: "https://youtube.com/@motioninchrist",
      kakaoUrl: "https://pf.kakao.com/_abcde",
      url: "https://motioninchrist.co.kr",
      activitySchedule: "활동일정\n• 정모시간: 매주 목요일 19시 ~ 21시\n• 3월 10일: 새학기 맞이 개강예배\n• 3월 25일: MTC 워크샵\n• 4월 06일 ~ 04월 12일: 리쿠르팅\n• 4월 20일: MTC 한동 연합 찬양집회\n• 5월 05일: MNT 말씀나눔 캠페인",
  
      progressingEventList: [
        {
          categoryOfEvent: "리쿠르팅",
          id: 1,
          photo: testImg,
          title: "MIC 31ST 남자 추가 리쿠르팅",
          startDate: "2025-03-23",
          endDate: "2025-03-26"
        },
        {
          categoryOfEvent: "워크샵",
          id: 2,
          photo: testImg,
          title: "2025 MIC WORKSHOP",
          startDate: "2025-03-11",
          endDate: "2025-03-13"
        },
        {
          categoryOfEvent: "공연",
          id: 3,
          photo: testImg,
          title: "MIC Street Performance",
          startDate: "2025-03-12",
          endDate: "2025-03-12"
        }
      ],
  
      lastRecruitingList: [
        {
          recruitingId: 1,
          photo: testImg,
          period: "2024 - 1"
        },
        {
          recruitingId: 2,
          photo: testImg,
          period: "2023 - 1"
        },
        {
          recruitingId: 3,
          photo: testImg,
          period: "2022 - 1"
        },
        {
          recruitingId: 4,
          photo: testImg,
          period: "2021 - 1"
        }
      ],
  
      lastEventList: [
        {
          showOrEntertain: "공연",
          id: 1,
          photo: testImg,
          title: "2024 MIC 자체공연",
          startDate: "2024-11-23",
          endDate: "2024-11-24"
        },
        {
          showOrEntertain: "공연",
          id: 2,
          photo: testImg,
          title: "Street Verry Jam",
          startDate: "2024-06-05",
          endDate: "2024-06-05"
        },
        {
          showOrEntertain: "전시",
          id: 3,
          photo: testImg,
          title: "MNT 사진전 - 그리고",
          startDate: "2024-03-31",
          endDate: "2024-04-05"
        },
        {
          showOrEntertain: "공연",
          id: 4,
          photo: testImg,
          title: "2024 스트릿 공연",
          startDate: "2024-03-13",
          endDate: "2024-03-13"
        },
        {
          showOrEntertain: "워크샵",
          id: 5,
          photo: testImg,
          title: "2023-2 축제 워크샵",
          startDate: "2023-11-01",
          endDate: "2023-11-02"
        },
        {
          showOrEntertain: "공연",
          id: 6,
          photo: testImg,
          title: "2023 한스트 스트릿공연",
          startDate: "2023-02-21",
          endDate: "2023-02-21"
        },
        {
          showOrEntertain: "워크샵",
          id: 7,
          photo: testImg,
          title: "2022 MIC 워크샵",
          startDate: "2022-03-12",
          endDate: "2022-03-13"
        },
        {
          showOrEntertain: "방송",
          id: 8,
          photo: testImg,
          title: "2020 MIC 라이브방송",
          startDate: "2020-04-29",
          endDate: "2020-04-29"
        }
      ]
    
    };

  return (
    <>
      <div className={styles.clubDetail}>
        <span className={styles.titleName}> 동아리 정보 </span>
        <div className={styles.clubDeatilContainer}>
          <div className={styles.clubDeatilLeft}>
            <img src={clubList.photo} alt ="" className={styles.ClubImg}/>

            <div className={styles.clubDeatilText1}>
              <div className={styles.clubDeatiltitleDiv}>
                <span className={styles.clubDeatiltitle}>필수학기</span>
              </div>
              <div className={styles.clubDeatiltextDiv}>
              <span className={styles.clubDeatiltext}>{clubList.mandatorySemesters}</span>
              </div>
            </div>

            <div className={styles.clubDeatilText1}>
              <div className={styles.clubDeatiltitleDiv}>
                <span className={styles.clubDeatiltitle}>활동일정</span>
              </div>
              <div className={styles.clubDeatiltextDiv}>
                <span className={styles.clubDeatiltext}>
                  {clubList.activitySchedule.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </span>
              </div>
            </div>

          </div>

          <div className={styles.clubDeatilRight}>
            <span>{clubList.clubName}</span>
            <div className={styles.icons}>
              <img src={insta} alt ="" className={styles.iconImg}/>
              <img src={youtube} alt ="" className={styles.iconImg}/>
              <img src={kakao} alt ="" className={styles.iconImg}/>
              <img src={link} alt ="" className={styles.iconImg}/>
            </div>
            <span>{clubList.content}</span>
          </div>

        </div>

        <span className={styles.titleName}> 진행 중인 이벤트 </span>
        <div className={styles.EventCardContainer}>
          {clubList.progressingEventList.map((item, index) => (
            <EventCard key={index} show={item} />
          ))}
        </div>


        <span className={styles.titleName}> 지난 리크루팅 </span>
        <span className={styles.titleName}> 지난 볼거리 </span>
      </div>
    </>
  );
}

export default ClubDetail;