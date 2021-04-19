import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          name="search"
          type="text"
          value={props.value}
          className="form-control"
          onChange={props.handleInputChange}
          placeholder="Search For User by Name"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
