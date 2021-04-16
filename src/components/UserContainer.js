import React, { Component } from "react";
// import Container from "./Container";
// import Row from "./Row";
// import Col from "./Col";
// import Card from "./Card";
import SearchForm from "./SearchForm";
// import MovieDetail from "./MovieDetail";
import UsersTable from "./Table";
import API from "../utils/API";
import FilterForm from "./FilterForm";

class UserContainer extends Component {
    state = {
      result: [],
      currentResult: [],
      search: "",
      sortTypes: "up"
    };

  // When this component mounts, search for "20" of the randomly generated employees
  componentDidMount() {
    this.getUsers();
  };

  getUsers = query => {
    API.getUsers(query)
      .then(res => 
        this.setState({ result: res.data.results, currentResult: res.data.results }))
      .catch(err => console.log(err));
  };
    
  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
    const filteredResults = this.state.currentResult.filter((user) => {
        return user.name.first.toLowerCase().includes(value.toLowerCase()) ||
          user.name.last.toLowerCase().includes(value.toLowerCase())
      });
      this.setState({result: filteredResults})
  };
    
  // When the form is submitted, search the Random Users API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    const searchUsers = event.target.value;
    this.setState({
      search: searchUsers
    });
  };

  // SORTING
  
	// method called every time the sort button is clicked
	// it will change the currentSort value to the next one
	onSortChange = () => {
    const { sortTypes, currentResult } = this.state;
    console.log({sortTypes});
		let nextSort;
    let sortedResult;

		if (sortTypes === 'down') {
      sortedResult = currentResult.sort((a, b) => b.name.last.localeCompare(a.name.last));
      console.log(sortedResult);
      nextSort = 'up';
      this.setState({
        ...this.state,
        sortTypes: nextSort,
        currentResult: sortedResult
      });
    }
		else if (sortTypes === 'up') {
      sortedResult = currentResult.sort((a, b) => a.name.last.localeCompare(b.name.last));
      console.log(sortedResult);
      nextSort = 'default';
      this.setState({
        ...this.state,
        sortTypes: nextSort,
        currentResult: sortedResult
      });

    } 
		else if (sortTypes === 'default') {
      // sortedResult = currentResult.sort((a, b) => a);
      nextSort = 'down';
      this.setState({
        ...this.state,
        sortTypes: nextSort,
        currentResult: this.state.result
      });

    } 

// put sortType here as a switch statement
// switch (sortTypes) {
//   case "up": {}currentResult.sort((a, b) => a.name.last - b.name.last);
//     nextSort = 'default';
//     break;

//   case "down": currentResult.sort((a, b) => b.name.last - a.name.last);
//     nextSort = 'up';
//     break;

//   default: currentResult.sort((a, b) => a);
//   nextSort = 'down'; 
//   break;
// }

// pass in nextSort (defined above)
// within each switch case, grab current result state, do .sort, put sort logic and set currentState equal to it. 
// put currentState into a temp variable.
// have a method of changing the button to activate the next state. 
		// this.setState({
		// 	...this.state,
    //   sortTypes: nextSort,
    //   currentResult: sortedResult
		// });
	};


  render() {
    return (
      
      <div className="container">
        <h1 className="text-center">User Directory</h1>
        <hr></hr>
        <SearchForm
          value={this.state.search}
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <FilterForm
         value={this.state.search}
         search={this.state.search}
         handleInputChange={this.handleInputChange}
        />
        <UsersTable 
          data={this.state} 
          search={this.handleFormSubmit} 
          sort={this.onSortChange}
        />
      </div>
    );
  };
};
export default UserContainer;
