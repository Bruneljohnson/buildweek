import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DataActions } from "../../store/data-slice/DataSlice";
import AllListItems from "../Andi/ListItem/AllListItems";
import ExperienceScale from "../Experience/ExperienceScale";
import Search from "../Search/Search";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [showKey, setShowKey] = useState(false);

  const showKeyHandler = () => {
    setShowKey((prev) => !prev);
  };

  /** API CALL */
  // useEffect(() => {

  // dispatch(DataActions.storeTrainers())
  // dispatch(DataActions.storeWorkshops())

  // }, [dispatch])

  return (
    <div style={{ position: "relative" }}>
      <Search />
      <ExperienceScale onClick={showKeyHandler} showKeyState={showKey} />
      <AllListItems />
    </div>
  );
};

export default LandingPage;
