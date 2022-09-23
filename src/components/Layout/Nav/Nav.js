import React from "react";
import { BsFillBellFill, BsFillQuestionCircleFill } from "react-icons/bs";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <figure>
          <svg
            width="40"
            height="40"
            viewBox="0 0 600 600"
            fill="#FF323C"
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinejoin: "round",
              strokeMiterlimit: 2,
            }}
          >
            <g transform="matrix(1,0,0,1,1,1)">
              <path d="M119,99C99.333,99 99,119 99,119L99,379C100.073,457.927 143.018,494.982 219,499L379,499C457.838,497.838 500.022,460.022 499,379L499,119C499,119 498.667,99 479,99C457.333,99 459,119 459,119L459,239C439.053,198.947 400.694,177.306 339,179L259,179C198.235,178.235 160.678,200.678 139,239L139,119C139,119 138.667,99 119,99ZM460,361C460,316.847 424.153,281 380,281L220,281C175.847,281 140,316.847 140,361C140,405.153 175.847,441 220,441L380,441C424.153,441 460,405.153 460,361Z"></path>
            </g>
            <g transform="matrix(1,0,0,1,1,1)">
              <circle cx="220" cy="360" r="40"></circle>
            </g>
            <g transform="matrix(1,0,0,1,161,1)">
              <circle cx="220" cy="360" r="40"></circle>
            </g>
          </svg>
        </figure>
        <h1>ANDi Trainer</h1>
      </div>
      <div className={classes.icons}>
        <figure className={classes.iconContainer}>
          <BsFillQuestionCircleFill className={classes.iconsvg} />
        </figure>
        <figure className={classes.iconContainer}>
          <p>K</p>
        </figure>
        <figure className={classes.iconContainer}>
          <BsFillBellFill className={classes.iconsvg} />
        </figure>
        <figure className={classes.profileImg}>
          <img
            src="https://ca.slack-edge.com/E0268G5LYLC-U02QZK87DJB-0b9e64831c37-512"
            alt="user profile"
          ></img>
        </figure>
      </div>
    </nav>
  );
};

export default Nav;
