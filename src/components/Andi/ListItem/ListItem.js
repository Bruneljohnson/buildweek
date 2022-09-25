import React from "react";
import classes from "./ListItem.module.css";

const ListItem = (props) => {
  /** onFullProfile takes up id of the mapped item.
   * making it possible to show correct full Profile.
   */

  const { id, name, role, club, image, profileIdentity } = props;

  const showFullProfileHandler = () => {
    const data = id;
    props.onFullProfile(data);
  };

  return (
    <div
      className={classes["list-item"]}
      style={{
        background: `${profileIdentity === id ? "#ebe5e5fe" : "#ffffff"}`,
      }}
      onClick={showFullProfileHandler}
    >
      <figure className={classes["list-item_imgCon"]}>
        <img src={image} alt={`Red chair of ${name.split(" ")[0]}`} />
      </figure>
      <div className={classes["list-item_user-info"]}>
        <h2>{name}</h2>
        <div className={classes["list-item_user-role"]}>
          <p>{role}</p>
          <p>-</p>
          <p>{club}</p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
