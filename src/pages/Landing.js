import React, {useState} from "react";
import './styles/Landing.css';
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
      <div className="landing-body">
        <div className="landing-words">
          교내 공연 정보와 동아리 정보 확인은 모두 <span className="landing-words-highlight">모보까</span>에서
        </div>
        <div className="google-start-btn-box">
          <img className="google-start-btn" src={isHovering ? GoogleStartBtnHover : GoogleStartBtnDefault} alt="google-start-btn" onMouseOver={onMouseOver}
          onMouseOut={onMouseOut} />
        </div>
      </div>

    </>
  );
}

export default Landing;
