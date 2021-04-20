import React from 'react'

function FilterForm (props) {
  console.log(props);
    return (
      <div className="text-center">
        <label htmlFor="filter">Type to filter Users: </label>
        <input 
            id="filter" 
            name="filter"
            type="text" 
            value={props.value}
            placeholder="Filter by name"
            onChange={props.handleInputChangeFilter}
            className="mx-2" />
          <button onClick={props.handleFilterReset} className="btn btn-danger mx-2 p-1">
            Reset
          </button>

      </div>
      )
  }

export default FilterForm;