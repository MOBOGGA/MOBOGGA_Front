import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Landing.module.css";
import GoogleStartBtnDefault from "../assets/GoogleStartBtn-Default.svg";
import GoogleStartBtnHover from "../assets/GoogleStartBtn-Hover.svg";
import LandingPageTape from "../assets/LandingPageTape.svg";
import LandingPageWords from "../assets/landingPageWords.svg";

function Landing() {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const onMouseOver = () => {
    setIsHovering(true);
  };

  const onMouseOut = () => {
    setIsHovering(false);
  };

  const onClickGoogleStartBtn = () => {
    navigate(`/add-info`);
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.words_box}>
          <div className={styles.words_img_box}>
            <img className={styles.words_img} src={LandingPageWords} alt="" />
          </div>
          <div className={styles.google_start_btn_box}>
            <img
              className={styles.google_start_btn}
              src={isHovering ? GoogleStartBtnHover : GoogleStartBtnDefault}
              alt="google-start-btn"
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
              onClick={onClickGoogleStartBtn}
            />
          </div>
        </div>
        <div className={styles.tape_box}>
          <img className={styles.landing_tape} src={LandingPageTape} alt="" />
        </div>
      </div>
    </>
  );
}

export default Landing;
