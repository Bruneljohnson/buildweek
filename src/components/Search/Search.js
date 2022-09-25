import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DataActions } from "../../store/data-slice/DataSlice";
import { AiOutlineSearch } from "react-icons/ai";
import Filter from "../Ui/Filter";
import useInput from "../../hooks/use-input";

import classes from "./Search.module.css";

const Search = () => {
  const dispatch = useDispatch();
  const [searchSelect, setSearchSelect] = useState(1);

  /** Using Custom Hook (Use-Input) to capture input data. */
  const {
    value: searchValue,
    inputBlur: searchBlurHandler,
    inputHandler: searchInputHandler,
  } = useInput((value) => value.toLowerCase().trim() !== "");

  /** Change search/filter options.
   * ANDi name is for search bar
   * others are drop down menu's
   * save to redux.
   */
  const searchSelectHandler = (value) => {
    setSearchSelect(value);
    dispatch(DataActions.storeSearchSelect(value));
  };

  const optionsWorkshopSelectHandler = (value) => {
    dispatch(DataActions.storeWorkshopOptionsSelect(value));
  };
  const optionsClubSelectHandler = (value) => {
    dispatch(DataActions.storeClubOptionsSelect(value));
  };

  const selectExHandler = (value) => {
    dispatch(DataActions.storeExSelect(value));
  };

  // Clear Profile when search Select or onBlur changes
  useEffect(() => {
    dispatch(DataActions.remove());
  }, [dispatch, searchSelect, searchBlurHandler]);

  //Submit search value
  const submitHandler = (event) => {
    event.preventDefault();

    //Save to redux
    const searchANDi = searchValue.toLowerCase();
    console.log(searchANDi);
    dispatch(DataActions.storeSearchValue(searchANDi));
  };

  // Debouncer so onChange is only read after 300ms
  useEffect(() => {
    const debouncer = setTimeout(() => {
      const searchANDi = searchValue.toLowerCase();
      console.log(searchANDi);
      dispatch(DataActions.storeSearchValue(searchANDi));
    }, 300);

    return () => {
      clearTimeout(debouncer);
    };
  }, [searchValue, dispatch]);

  return (
    <div className="section-padding">
      <form className={` ${classes.search}`} onSubmit={submitHandler}>
        <div className={classes["search_input-group"]}>
          <input
            value={searchValue}
            placeholder="Search by name"
            onChange={searchInputHandler}
            onBlur={searchBlurHandler}
            type="text"
            className={classes["search_input"]}
          />
          <div>
            <button type="submit" className={classes["search_button"]}>
              <AiOutlineSearch className={classes["search_icon"]} />
            </button>
          </div>
        </div>
      </form>
      <div className={classes["search_select"]}>
        <button
          className={`custom-button ${
            searchSelect === 1 ? classes["search_select-active"] : ""
          }`}
          onClick={() => {
            searchSelectHandler(1);
          }}
        >
          ANDi Name
        </button>
        <button
          className={`custom-button ${
            searchSelect === 2 ? classes["search_select-active"] : ""
          }`}
          onClick={() => searchSelectHandler(2)}
        >
          Workshop
        </button>
        <button
          className={`custom-button ${
            searchSelect === 3 ? classes["search_select-active"] : ""
          }`}
          onClick={() => searchSelectHandler(3)}
        >
          BU/Club
        </button>
      </div>
      {searchSelect === 2 && (
        <Filter
          onSelect={optionsWorkshopSelectHandler}
          onSelectEX={selectExHandler}
          title="workshop"
        />
      )}
      {searchSelect === 3 && (
        <Filter onSelect={optionsClubSelectHandler} title="business unit" />
      )}
    </div>
  );
};

export default Search;
