import React from "react";
import classes from "./Filter.module.css";

const Filter = (props) => {
  /** Fuction sends up state changes from select inputs. */
  const optionSelectHandler = (event) => {
    event.preventDefault();

    const data = event.target.value;
    props.onSelect(data);
  };

  const selectEXHandler = (event) => {
    event.preventDefault();

    const data = event.target.value;
    props.onSelectEX(data);
  };

  return (
    <div className={classes.filter}>
      {props.title === "workshop" && (
        /** Change values to match backend */
        <div className={classes.workshop}>
          <select
            className={classes["filter_input"]}
            onChange={optionSelectHandler}
          >
            <option value="">Workshop</option>
            <option value={3}>Culture & Values</option>
            <option value={4}>Psychological Safety</option>
            <option value={5}>Feedback & Ambiguity</option>
            <option value={6}>AND @ Work: Op Model</option>
            <option value={1}>HBDI</option>
            <option value={2}>Scrum Master</option>
            <option value={7}>Client Fundamentals</option>
            <option value={9}>PD Fundamentals</option>
            <option value={8}>PA Fundamentals</option>
            <option value={10}>Backlog Building 101</option>
            <option value={11}>Sprint Planning</option>
            <option value={12}>Build Week: Sprint Planning</option>
            <option value={13}>Build Week: Senior PA support</option>
            <option value={14}>Build Week: Senior PD support</option>
          </select>

          <select
            className={classes["filter_input"]}
            onChange={selectEXHandler}
          >
            <option value="">Experience</option>
            <option value={1}>No Experience</option>
            <option value={2}>Shadowing</option>
            <option value={3}>Co-run Session</option>
            <option value={4}>Lead With Support</option>
            <option value={5}>Lead Independently</option>
            <option value={6}>Train Others</option>
          </select>
        </div>
      )}
      {props.title ===
        "business unit" /** Change values to match backend */ && (
        <select
          className={classes["filter_input"]}
          onChange={optionSelectHandler}
        >
          <option value="">Business Unit</option>
          <option value={3}>Club Ada</option>
          <option value={2}>Club hamilton</option>
          <option value={4}>Club dekker</option>
          <option value={7}>Club cloud</option>
          <option value={6}>club gladys</option>
          <option value={8}>club london 5</option>
          <option value={5}>club turing</option>
          <option value={1}>tenzing london</option>
          <option value={9}>consulting</option>
          <option value={10}>global functions</option>
        </select>
      )}
    </div>
  );
};

export default Filter;
