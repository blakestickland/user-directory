import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group text-center">
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          name="search"
          type="text"
          value={props.value}
          className="mx-2"
          onChange={props.handleInputChange}
          placeholder="Search by location"
        />
        {/* <br /> */}
        <button onClick={props.handleLocationReset} className="btn btn-primary mx-2 p-1">
          Reset
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
