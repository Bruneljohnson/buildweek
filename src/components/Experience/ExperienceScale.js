import React from "react";
import classes from "./ExperienceScale.module.css";

const ExperienceScale = (props) => {
  const { onClick, showKeyState } = props;
  return (
    <React.Fragment>
      {!showKeyState && (
        <button
          className={`custom-button-key ${classes.exScale}`}
          type="button"
          onClick={onClick}
        >
          Show Experience Key
        </button>
      )}
      {showKeyState && (
        <div className={classes.exScale} onClick={props.onClick}>
          <div className={`${classes.ex} ${classes.one}`}>
            1 - No Experience
          </div>
          <div className={`${classes.ex} ${classes.two}`}>2 - Shadowing</div>
          <div className={`${classes.ex} ${classes.three}`}>
            3 - Co-run Session
          </div>
          <div className={`${classes.ex} ${classes.four}`}>
            4 - Lead With Support
          </div>
          <div className={`${classes.ex} ${classes.five}`}>
            5 - Lead Independently
          </div>
          <div className={`${classes.ex} ${classes.six}`}>6 - Train Others</div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ExperienceScale;
