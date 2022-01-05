import React from "react";
import classes from "./Search.module.scss";

const Search = ({ setEnteredSearch, setPageNumber }) => {
  return (
    <form className="d-flex flex-sm-row flex-column justify-content-center align-items-center mb-4 gap-4">
      <input
        onChange={(e) => {
            setPageNumber(1);
            setEnteredSearch(e.target.value)
        }}
        type="text"
        className={classes.input}
        placeholder="Search for character"
      ></input>
      <button onClick={e => {
        e.preventDefault();
      }} 
      className="btn-primary btn fs-5">Search</button>
    </form>
  );
};

export default Search;
