import React, {useState} from "react";
import styles from './styles/Landing.module.css';
import GoogleStartBtnDefault from '../assets/GoogleStartBtn-Default.svg';
import GoogleStartBtnHover from '../assets/GoogleStartBtn-Hover.svg';

function Landing() {
  const [isHovering, setIsHovering] = useState(false);

  const onMouseOver = () => {
    setIsHovering(true);
  };

  const onMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.landing_words}>
          교내 공연 정보와 동아리 정보 확인은 모두 <span className={styles.landing_words_highlight}>모보까</span>에서
        </div>
        <div className={styles.google_start_btn_box}>
          <img className={styles.google_start_btn_box} src={isHovering ? GoogleStartBtnHover : GoogleStartBtnDefault} alt="google-start-btn" onMouseOver={onMouseOver}
          onMouseOut={onMouseOut} />
        </div>
      </div>

    </>
  );
}

export default Landing;
