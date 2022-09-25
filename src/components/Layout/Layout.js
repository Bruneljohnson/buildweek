import React from "react";
import LeftPanel from "./LeftPanel/LeftPanel";
import Header from "./Header/Header";
import { useSelector } from "react-redux";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const { isDesktop } = props;
  const showLeftPanel = useSelector((state) => state.data.showLeftPanel);

  return (
    <React.Fragment>
      <Header />
      <div className={`${classes.layout}`}>
        {isDesktop && (
          <div>
            <LeftPanel isDesktop={isDesktop} />
          </div>
        )}

        {!isDesktop && showLeftPanel && (
          <div>
            <LeftPanel isDesktop={isDesktop} />
          </div>
        )}
        <main>{props.children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
