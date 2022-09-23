import React from "react";
import Nav from "../Nav/Nav";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={`${classes.header}`}>
      <Nav />
    </div>
  );
};

export default Header;
