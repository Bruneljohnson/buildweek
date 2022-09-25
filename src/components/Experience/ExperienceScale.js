import React from "react";
import classes from "./ExperienceScale.module.css";

const ExperienceScale = (props) => {
  const { onClick, showKeyState } = props;

  return (
    <React.Fragment>
      {!showKeyState && (
        <button
          className={`custom-button-key ${classes.exScaleBtn}`}
          type="button"
          onClick={onClick}
        >
          Exp Key
        </button>
      )}
      {showKeyState && (
        <div className={classes.exScale} onClick={props.onClick}>
          <div className={`${classes.ex} ${classes.one}`}>
            0 - No Experience
          </div>
          <div className={`${classes.ex} ${classes.two}`}>1 - Shadowing</div>
          <div className={`${classes.ex} ${classes.three}`}>
            2 - Co-run Session
          </div>
          <div className={`${classes.ex} ${classes.four}`}>
            3 - Lead With Support
          </div>
          <div className={`${classes.ex} ${classes.five}`}>
            4 - Lead Independently
          </div>
          <div className={`${classes.ex} ${classes.six}`}>5 - Train Others</div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ExperienceScale;
