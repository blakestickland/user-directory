import React, { Component } from "react";
import SearchForm from "./SearchForm";
import UsersTable from "./Table";
import API from "../utils/API";
import FilterForm from "./FilterForm";

class UserContainer extends Component {
  constructor (){
    super();
    this.state = {
        initialResult: [],
        resultView: [],
        search: "",
        filter: "",
        sortTypes: "default"
      };
  }  

  // When this component mounts, search for "20" of the randomly generated employees
  componentDidMount() {
    this.getUsers();
  };

  getUsers = query => {
    console.log("getting users from API");
    API.getUsers(query)
      .then(res => 
        this.setState({initialResult: [...res.data.results], resultView: res.data.results }))
      .catch(err => console.log(err));
  };

  handleSearch = (event) => {
    event.preventDefault();
    const currentSearch = event.target.value;
    this.setState({
      search: currentSearch
    });
  };
    
  handleInputChange = event => {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    const filteredResults = this.state.resultView.filter(user => {
      return user.location.city.toLowerCase().includes(value.toLowerCase()) ||
        user.location.country.toLowerCase().includes(value.toLowerCase()) || 
        user.location.state.toLowerCase().includes(value.toLowerCase())
      });
      this.setState({resultView: filteredResults});
  };

  handleInputChangeFilter = event => {
    const value = event.target.value;

    const filteredResults = this.state.resultView.filter((user) => {
      return user.name.first.toLowerCase().includes(value.toLowerCase()) ||
      user.name.last.toLowerCase().includes(value.toLowerCase())
    });
    this.setState({filter: value, resultView: filteredResults})
  };

  handleFilterReset = event => {
    event.preventDefault();
    this.setState({
      filter: "",
      resultView: [...this.state.initialResult]
    })
  }
    
  // When the form is submitted, search the Random Users API for the value of `this.state.search`
  handleLocationReset = () => {
    this.setState({
      search: "",
      resultView: [...this.state.initialResult]
    })
  };

  // SORTING
  
	// method called every time the sort button is clicked
	// it will change the currentSort value to the next one
	onSortChange = () => {
    const { sortTypes, resultView, initialResult } = this.state;
    // console.log({sortTypes});
		let nextSort;
    let sortedResult;
    
    // put sortTypes here as a switch statement
    switch (sortTypes) {
      case "down": 
      sortedResult = resultView.sort((a, b) => b.name.last.localeCompare(a.name.last));

        nextSort = 'up';    
        this.setState({
          sortTypes: nextSort,
          resultView: sortedResult
        });
      break;

      case "up": 
        sortedResult = initialResult;
        nextSort = 'default';
        this.setState({
          sortTypes: nextSort,
          resultView: sortedResult
        });
      break;

      default: 
      sortedResult = resultView.sort((a, b) => a.name.last.localeCompare(b.name.last));

        nextSort = 'down';
        this.setState({
          sortTypes: nextSort,
          resultView: sortedResult
        });
      break;
    };
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
          handleLocationReset={this.handleLocationReset}
        />
        <FilterForm
          value={this.state.filter}
          filter={this.state.filter}
          handleInputChangeFilter={this.handleInputChangeFilter}
          handleFilterReset={this.handleFilterReset}
        />
        <UsersTable 
          data={this.state} 
          sort={this.onSortChange}
        />
      </div>
    );
  };
};
export default UserContainer;
