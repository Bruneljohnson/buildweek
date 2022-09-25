import React, { useEffect, useState } from "react";
import FullProfile from "../FullBio/FullProfile";
import { useSelector, useDispatch } from "react-redux";
import { DataActions } from "../../../store/data-slice/DataSlice";
import classes from "./AllListItems.module.css";
import ListItem from "./ListItem";

const AllListItems = (props) => {
  const dispatch = useDispatch();
  const { isDesktop } = props;

  /** Dropdown menu values */
  const searchSelect = useSelector((state) => state.data.searchSelect);
  const clubSelect = useSelector((state) => state.data.optionClubSelect);
  const workshopSelect = useSelector(
    (state) => state.data.optionWorkshopSelect
  );
  const workExSelect = useSelector((state) => state.data.selectEx);

  /** ANDi tab id */
  const profileIdentity = useSelector((state) => state.data.profileIdentity);

  /** data from API CALLS and search input value */
  const trainers = useSelector((state) => state.data.trainers);
  const workshops = useSelector((state) => state.data.workshops);
  const searchValue = useSelector((state) => state.data.searchValue);

  /** Show full profile tab functionality */
  const [showProfile, setShowProfile] = useState(false);

  const showProfileHandler = (data) => {
    dispatch(DataActions.storeProfileIdentity(data));
    setShowProfile(true);
  };
  const showProfileMobileHandler = (data) => {
    dispatch(DataActions.storeProfileIdentity(data));
    setShowProfile((prev) => !prev);
  };

  /** Hide Profile if theres a change in the filter menus. */
  useEffect(() => {
    setShowProfile(false);
  }, [clubSelect, workExSelect, workshopSelect]);

  /** Filter depending on Search select option. */
  let filter;

  // Display list Default & Name Search filter is chosen
  if (searchSelect === 1 && (!searchValue || searchValue === "")) {
    filter = trainers;
  }

  if (searchSelect === 1 && searchValue) {
    const nameSearch = trainers.filter((trainer) =>
      trainer?.name.toLowerCase().startsWith(`${searchValue}`)
    );
    filter = nameSearch;
  }

  // Display list when Workshop & Experience filter is chosen
  if (searchSelect === 2 && workshopSelect && workExSelect) {
    const findWorkshop = workshops.find(
      (workshop) => workshop?.name.toLowerCase().trim() === workshopSelect
    );

    const workshopTrainers = findWorkshop ?? null;

    const findExp =
      workshopTrainers.trainers
        .filter(
          (trainer) =>
            Number.parseInt(trainer?.experience_level) === Number(workExSelect)
        )
        .map((ex) => ex?.trainer) ?? [];

    filter = findExp ?? [];
  }

  if (searchSelect === 2 && (!workshopSelect || !workExSelect)) {
    filter = [];
  }

  // Display list when Business Unit filter is chosen
  if (searchSelect === 3 && !clubSelect) {
    filter = [];
  }

  if (searchSelect === 3 && clubSelect) {
    const clubSearch = trainers.filter(
      (trainer) => trainer?.club?.name.toLowerCase().trim() === clubSelect
    );
    filter = clubSearch;
  }

  return (
    <div className={`${classes["all-list"]}`}>
      <h3>All ANDis ({filter.length ?? 0} ANDis)</h3>
      {isDesktop && (
        <div className={classes["mapped-list"]}>
          {filter.length === 0 && (
            <p className={classes.err}>We can't find any ANDis to display</p>
          )}
          {filter.length !== 0 && (
            <ul className={classes["mapped-list_ul"]}>
              {filter.map((number, i) => (
                <ListItem
                  key={i}
                  id={number.id}
                  name={number?.name}
                  role={number?.company_role}
                  image={number?.img}
                  club={number?.club?.name}
                  profileIdentity={profileIdentity}
                  onFullProfile={showProfileHandler}
                />
              ))}
            </ul>
          )}
          {showProfile && <FullProfile profileState={profileIdentity} />}
        </div>
      )}

      {/* MOBILE RESPONSIVE */}
      {!isDesktop && (
        <div className={classes["mapped-list"]}>
          {!showProfile && filter.length === 0 && (
            <p className={classes.err}>We can't find any ANDis to display</p>
          )}
          {!showProfile && filter.length !== 0 && (
            <ul className={classes["mapped-list_ul"]}>
              {filter.map((number, i) => (
                <ListItem
                  key={i}
                  id={number.id}
                  name={number?.name}
                  role={number?.company_role}
                  image={number?.img}
                  club={number?.club?.name}
                  profileIdentity={profileIdentity}
                  onFullProfile={showProfileMobileHandler}
                />
              ))}
            </ul>
          )}
          {showProfile && (
            <FullProfile
              isDesktop={isDesktop}
              onFullProfile={showProfileMobileHandler}
              profileState={profileIdentity}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AllListItems;
