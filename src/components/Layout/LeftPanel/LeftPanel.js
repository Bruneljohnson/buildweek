import React from "react";
import {
  BsFillQuestionCircleFill,
  BsFillCalendar2DayFill,
} from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { IoSchoolSharp, IoLeafSharp } from "react-icons/io5";
import { RiContactsFill, RiUserSearchFill } from "react-icons/ri";
import classes from "./LeftPanel.module.css";

const LeftPanel = () => {
  return (
    <div className={classes["left-panel"]}>
      <div className={classes["side-nav"]}>
        <h2>ANDi</h2>
        <ul className={classes["side-nav_links"]}>
          <li className={classes["side-nav_links-item"]}>
            <BsFillQuestionCircleFill
              className={classes["side-nav_links-item_icon"]}
            />
            <p>Help Center</p>
          </li>
          <li className={classes["side-nav_links-item"]}>
            <BsFillCalendar2DayFill
              className={classes["side-nav_links-item_icon"]}
            />
            <p>Record Time</p>
          </li>
          <li className={classes["side-nav_links-item"]}>
            <FaUserEdit className={classes["side-nav_links-item_icon"]} />
            <p>ANDi Profile</p>
          </li>
          <li className={classes["side-nav_links-item"]}>
            <RiContactsFill className={classes["side-nav_links-item_icon"]} />
            <p>ANDi Directory</p>
          </li>
          <li
            className={classes["side-nav_links-item"]}
            style={{ borderLeft: " 5px solid #b32c31", background: "#e0e0e0" }}
          >
            <RiUserSearchFill className={classes["side-nav_links-item_icon"]} />
            <p>ANDi Trainer </p>
          </li>
          <li className={classes["side-nav_links-item"]}>
            <IoSchoolSharp className={classes["side-nav_links-item_icon"]} />
            <p> Upskilling @ Scale</p>
          </li>
          <li className={classes["side-nav_links-item"]}>
            <IoLeafSharp className={classes["side-nav_links-item_icon"]} />
            <p> My Growth</p>
          </li>
          <li className={classes["side-nav_links-item"]}>
            <span>K</span>
            <p> Kudos</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftPanel;
