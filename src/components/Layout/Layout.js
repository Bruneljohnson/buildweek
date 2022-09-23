import React from "react";
import LeftPanel from "./LeftPanel/LeftPanel";
import Header from "./Header/Header";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <div className={`${classes.layout}`}>
        <div>
          <LeftPanel />
        </div>
        <main>{props.children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
