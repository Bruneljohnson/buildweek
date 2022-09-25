import React, { useEffect } from "react";
import useHttp from "../../hooks/use-Http";
import { useDispatch, useSelector } from "react-redux";
import { workshops } from "../../constants/data";
import { DataActions } from "../../store/data-slice/DataSlice";
import AllListItems from "../Andi/ListItem/AllListItems";

import Search from "../Search/Search";
import LoadingSpinner from "../Ui/LoadingSpinner";

const LandingPage = (props) => {
  const dispatch = useDispatch();
  const workEx = useSelector((state) => state.data.workshopEx);
  const searchSelect = useSelector((state) => state.data.searchSelect);
  const { sendRequest, error, isLoading } = useHttp();
  const { isDesktop } = props;

  /** API CALL */

  /** Store WorkshopEx to Redux */
  useEffect(() => {
    const dataGrabber = (data) => {
      dispatch(DataActions.storeWorkshopEx(data));
    };

    const requestConfig = {
      url: "http://localhost:8000/trainers/workshop-list",
    };

    sendRequest(requestConfig, dataGrabber);
  }, [dispatch, sendRequest]);

  /** Store Trainers to Redux */
  useEffect(() => {
    const dataGrabber = (data) => {
      /** Sort Trainers array alphabetically
       * SortedTrainers = [Object]
       */

      const sortedTrainers = data.sort((a, b) => a.name.localeCompare(b.name));
      dispatch(DataActions.storeTrainers(sortedTrainers));
    };

    const requestConfig = {
      url: "http://localhost:8000/trainers/list",
    };

    sendRequest(requestConfig, dataGrabber);
  }, [dispatch, sendRequest]);

  /** Store Workshops to Redux */
  useEffect(() => {
    if (searchSelect === 2) {
      /** Take existing data from frontend and re-model
       * using data from WorkEx API call
       * newWorkshopsArr = [Object]
       * */
      const newWorkshopsARR = workshops.map((workshop) => ({
        name: workshop.fields.name,
        duration: workshop.fields.duration,
        minTrainerLevel: workshop.fields.minTrainerLevel,
        trainerType: workshop.fields.trainerType,
        trainers: workEx.filter(
          (ex) =>
            ex?.workshop_name?.toLowerCase() ===
            workshop?.fields?.name.toLowerCase()
        ),
      }));

      dispatch(DataActions.storeWorkshops(newWorkshopsARR));
    }
  }, [dispatch, workEx, searchSelect]);

  return (
    <div style={{ position: "relative" }}>
      <Search />
      {isLoading && <LoadingSpinner />}
      {!isLoading && !error && <AllListItems isDesktop={isDesktop} />}
      {error && (
        <p
          className="section-padding flex-column"
          style={{
            color: "var(--color-black-text)",
            fontWeight: "500",
            fontSize: "2rem",
          }}
        >
          {error.message}
          <br /> Please Refresh
        </p>
      )}
    </div>
  );
};

export default LandingPage;
