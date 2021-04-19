import React from 'react'

function FilterForm (props) {
  
    return (
      <div>
        <label htmlFor="filter">Type to filter Users: </label>
        <input 
            id="filter" 
            name="filter"
            type="text" 
            // value={this.state.userFilter} 
            value={props.value}
            placeholder="Filter by Name"
            onChange={props.handleInputChangeFilter}
            className="mx-2" />
          <button onClick={props.handleFilterReset} className="btn btn-danger mx-2 p-1">
            Reset
          </button>

      </div>
      )
  }

export default FilterForm;