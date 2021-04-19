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
      initialResult: [],
      resultView: [],
      search: "",
      filter: "",
      sortTypes: "up"
    };

  // When this component mounts, search for "20" of the randomly generated employees
  componentDidMount() {
    this.getUsers();
  };

  getUsers = query => {
    API.getUsers(query)
      .then(res => 
        this.setState({ ...this.state, initialResult: res.data.results, resultView: res.data.results }))
      .catch(err => console.log(err));
  };

  handleSearch = (event) => {
    event.preventDefault();
    const currentSearch = event.target.value;
    this.setState({
      ...this.state,
      search: currentSearch
    });
  };
    
  handleInputChange = event => {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      ...this.state,
      [name]: value
    });
    const filteredResults = this.state.resultView.filter(user => {
        return user.name.first.toLowerCase().includes(value.toLowerCase()) ||
          user.name.last.toLowerCase().includes(value.toLowerCase())
      });
      this.setState({...this.stadte, resultView: filteredResults});
      console.log(value)
  };

  handleInputChangeFilter = event => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      filter: value
    });
    const filteredResults = this.state.resultView.filter((user) => {
        return user.name.first.toLowerCase().includes(value.toLowerCase()) ||
          user.name.last.toLowerCase().includes(value.toLowerCase())
      });
      this.setState({...this.state, resultView: filteredResults})
  };

  handleFilterReset = () => {
    this.setState({
      ...this.state,
      filter: "",
      resultView: this.state.initialResult
    })
  }
    
  // When the form is submitted, search the Random Users API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    const searchUsers = event.target.value;
    this.setState({
      ...this.state,
      search: searchUsers
    });
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
          ...this.state,
          sortTypes: nextSort,
          resultView: sortedResult
        });
      break;

      case "up": 
        sortedResult = resultView.sort((a, b) => a.name.last.localeCompare(b.name.last));
        nextSort = 'default';
        this.setState({
          ...this.state,
          sortTypes: nextSort,
          resultView: sortedResult
        });
      break;

      default: 
        sortedResult = initialResult;
        nextSort = 'down';
        this.setState({
          ...this.state,
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
          handleFormSubmit={this.handleFormSubmit}
        />
        <FilterForm
         value={this.state.filter}
         filter={this.state.filter}
         handleInputChangeFilter={this.handleInputChangeFilter}
         handleFilterReset={this.handleFilterReset}
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
