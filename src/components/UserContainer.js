import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import UsersTable from "./Table";
import API from "../utils/API";

class UserContainer extends Component {
  state = {
    result: {},
    search: "",
    sortType: 'asc'
  };

  // When this component mounts, search for "5" of the randomly generated employees
  componentDidMount() {
    this.searchUsers("20");
  }

  searchUsers = query => {
    API.search(query)
      .then(res => 
        // console.log(res.data.results))
        this.setState({ result: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchUsers(this.state.search);
  };

  // SORTING
  
	// method called every time the sort button is clicked
	// it will change the currentSort value to the next one
	// onSortChange = () => {
  //   const sortTypes = {
  //     up: {
  //       class: 'sort-up',
  //       fn: (a, b) => a.props.user.name.last - b.props.user.name.last
  //     },
  //     down: {
  //       class: 'sort-down',
  //       fn: (a, b) => b.props.user.name.last - a.props.user.name.last
  //     },
  //     default: {
  //       class: 'sort',
  //       fn: (a, b) => a
  //     }
  //   };
  //   const { currentSort } = this.state;
	// 	let nextSort;

	// 	if (currentSort === 'down') nextSort = 'up';
	// 	else if (currentSort === 'up') nextSort = 'default';
	// 	else if (currentSort === 'default') nextSort = 'down';

	// 	this.setState({
	// 		currentSort: nextSort
	// 	});
	// };


  render() {
    return (
      <div>
        <UsersTable data={this.state}/>
      </div>
    );
  };
};
export default UserContainer;
