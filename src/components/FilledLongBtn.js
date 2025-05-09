import React, { useState } from "react";
import styles from "./styles/FilledLongBtn.module.css";

function FilledLongBtn({ value, onClick }) {
  const [isHovering, setIsHovering] = useState(false);

  const onMouseOver = () => {
    setIsHovering(true);
  };

  const onMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={
        isHovering ? styles.FilledLongBtnHover : styles.FilledLongBtnDefault
      }
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {value}
    </div>
  );
}

export default FilledLongBtn;
