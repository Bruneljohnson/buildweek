import React from "react";
import classes from "./Filter.module.css";

const Filter = (props) => {
  /** Functions send up input values from select inputs. */
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
      {/* For Workshop */}
      {props.title === "workshop" && (
        <div className={classes.workshop}>
          <select
            className={classes["filter_input"]}
            onChange={optionSelectHandler}
          >
            <option value="">Workshop</option>
            <option value="cultures & values">Cultures & Values</option>
            <option value="psychological safety">Psychological Safety</option>
            <option value="feedback & ambiguity">Feedback & Ambiguity</option>
            <option value="hbdi">HBDI</option>
            <option value="scrum">Scrum Master</option>
            <option value="client fundamentals">Client Fundamentals</option>
            <option value="pd fundamentals">PD Fundamentals</option>
            <option value="pa fundamentals">PA Fundamentals</option>
            <option value="backlog building 101">Backlog Building 101</option>
            <option value="sprint planning">Sprint Planning</option>
          </select>

          <select
            className={classes["filter_input"]}
            onChange={selectEXHandler}
          >
            <option value="">Experience</option>
            <option value={0}>No Experience</option>
            <option value={1}>Shadowing</option>
            <option value={2}>Co-run Session</option>
            <option value={3}>Lead With Support</option>
            <option value={4}>Lead Independently</option>
            <option value={5}>Train Others</option>
          </select>
        </div>
      )}
      {/* For Business Unit  */}
      {props.title === "business unit" && (
        <select
          className={classes["filter_input"]}
          onChange={optionSelectHandler}
        >
          <option value="">Business Unit</option>
          <option value="club ada">Club Ada</option>
          <option value="club hamilton">Club hamilton</option>
          <option value="club dekker">Club dekker</option>
          <option value="club cloud">Club cloud</option>
          <option value="club gladys">club gladys</option>
          <option value="club london">club london 5</option>
          <option value="club turing">club turing</option>
          <option value="tenzing london">tenzing london</option>
          <option value="consulting">consulting</option>
          <option value="global functions">global functions</option>
        </select>
      )}
    </div>
  );
};

export default Filter;
