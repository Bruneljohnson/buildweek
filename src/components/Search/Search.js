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
    inputHandler: searchInputHandler,
    reset: clearSearch,
  } = useInput((value) => !value.toLowerCase().trim() === "");

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

  useEffect(() => {
    dispatch(DataActions.remove());
  }, [dispatch, searchSelect]);

  const submitHandler = (event) => {
    event.preventDefault();

    //Save to redux
    const searchANDi = searchValue.toLowerCase();
    dispatch(DataActions.storeSearchValue(searchANDi));
    console.log(searchANDi);
    // 300ms wait - debounce.
  };

  return (
    <div className="section-padding">
      <form className={` ${classes.search}`} onChange={submitHandler}>
        <div className={classes["search_input-group"]}>
          <input
            value={searchValue}
            placeholder="Search by name"
            onChange={searchInputHandler}
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
      <div className={classes.search_select}>
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
          Business Unit
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
