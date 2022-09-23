import React, { useEffect, useState } from "react";
import FullProfile from "../FullBio/FullProfile";
import { useSelector, useDispatch } from "react-redux";
import { DataActions } from "../../../store/data-slice/DataSlice";
import classes from "./AllListItems.module.css";
import ListItem from "./ListItem";

const AllListItems = (props) => {
  const dispatch = useDispatch();

  /** Dropdown menu values */
  const searchSelect = useSelector((state) => state.data.searchSelect);
  const clubSelect = useSelector((state) => state.data.optionClubSelect);
  const workshopSelect = useSelector(
    (state) => state.data.optionWorkshopSelect
  );
  const workExSelect = useSelector((state) => state.data.selectEx);

  /** ANDi tab id */
  const profileIdentity = useSelector((state) => state.data.profileIdentity);

  /** data from API and search input value */
  const trainers = useSelector((state) => state.data.trainers);
  const workshops = useSelector((state) => state.data.workshops);
  const searchValue = useSelector((state) => state.data.searchValue);

  /** Show full profile tab functionality */
  const [showProfile, setShowProfile] = useState(false);

  const showProfileHandler = (data) => {
    dispatch(DataActions.storeProfileIdentity(data));
    setShowProfile(true);
  };

  useEffect(() => {
    setShowProfile(false);
  }, [clubSelect, workExSelect, workshopSelect]);

  /** Filter depending on Search select option. */

  let filter;

  // Default & name search
  if (searchSelect === 1 && !searchValue) {
    filter = trainers;
  }
  if (searchSelect === 1 && searchValue) {
    const nameSearch = trainers.filter((trainer) =>
      trainer?.fields?.name.toLowerCase().startsWith(`${searchValue}`)
    );
    filter = nameSearch;
  }

  // Workshop & experience

  if (searchSelect === 2 && workshopSelect && workExSelect) {
    const findWorkshop = workshops.filter(
      (workshop) => Number(workshop?.pk) === Number(workshopSelect)
    );

    const workshopTrainers = findWorkshop[0]?.fields ?? null;

    const findExp =
      workshopTrainers.trainers
        .filter(
          (trainer) =>
            Number(trainer?.experience_level) === Number(workExSelect)
        )
        .map((ex) => ex?.trainer) ?? [];

    filter = findExp ?? [];
  }

  if (searchSelect === 2 && (!workshopSelect || !workExSelect)) {
    filter = [];
  }

  // Business Unit
  if (searchSelect === 3 && !clubSelect) {
    filter = [];
  }

  if (searchSelect === 3 && clubSelect) {
    const clubSearch = trainers.filter(
      /** WEIRD JS EQUILTY ISSUE CONVERT TO NUMBER */
      (trainer) => Number(trainer?.fields?.club?.pk) === Number(clubSelect)
    );
    filter = clubSearch;
  }

  return (
    <div className={`${classes["all-list"]}`}>
      <h3>All ANDis ({filter.length ?? 0} ANDis)</h3>
      <div className={classes["mapped-list"]}>
        {filter.length === 0 && (
          <p className={classes.err}>We can't find any ANDis to display</p>
        )}
        {filter.length !== 0 && (
          <ul className={classes["mapped-list_ul"]}>
            {filter.map((number, i) => (
              <ListItem
                key={i}
                id={number.pk}
                name={number.fields.name}
                role={number.fields.company_role}
                image={number.fields.image}
                club={number.fields.club.fields.name}
                onFullProfile={showProfileHandler}
              />
            ))}
          </ul>
        )}
        {showProfile && <FullProfile profileState={profileIdentity} />}
      </div>
    </div>
  );
};

export default AllListItems;
