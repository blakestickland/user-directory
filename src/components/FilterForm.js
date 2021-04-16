import React from 'react'

function FilterForm (props) {
  
    return (
      <div>
        <label htmlFor="filter">Filter by User: </label>
        <input 
            type="text" 
            id="filter" 
            // value={this.state.userFilter} 
            value={props.search}
            placeholder="Filter by Name"
            onChange={props.handleInputChange}/>
      </div>
      )
  }

export default FilterForm;