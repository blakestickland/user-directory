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
      result2: [],
      // result: {},
      search: "",
      sortType: 'asc'
    };

  // When this component mounts, search for "20" of the randomly generated employees
  componentDidMount() {
    this.getUsers();
  }

  // // New code in next para for filtering
  // componentWillMount() {
  //   this.setState({
  //     result,
  //     filteredResult: result
  //   })
  // }

  getUsers = query => {
    API.getUsers(query)
      .then(res => 
        this.setState({ result: res.data.results, result2: res.data.results }))
        .catch(err => console.log(err));
  };

  // Filter
  // filterUsers = () => {
  //   users.filter(user => {
  //   return  user.toLowercase().indexOf(this.state.getUsers.toLowercase()) !== -1
  // })};
  // filterUsers = () => {
  //   users.filter(user => {
  //   return  user.toLowercase().indexOf(this.state.getUsers.toLowercase()) !== -1
  // })};

  
  // Sort
  //   users.sort(compareFunction)
  //  compareFunction = (a,b) => {
    //   //  apply logic here
    //   return a.name - b.name // (asc)
    //          b.name - a.name // (desc)
    //  }
    
    handleInputChange = event => {
      // const name = event.target.name;
      const value = event.target.value;
      this.setState({
        search: value
      });
      const filteredResults = this.state.result2.filter((user) => {
          return user.name.first.toLowerCase().includes(value.toLowerCase()) ||
            user.name.last.toLowerCase().includes(value.toLowerCase())
          // return user.name.first.toLowerCase().indexOf(this.state.getUsers.toLowerCase()) !== -1
        })
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
    const sortTypes = {
      up: {
        class: 'sort-up',
        fn: (a, b) => a.props.user.name.last - b.props.user.name.last
      },
      down: {
        class: 'sort-down',
        fn: (a, b) => b.props.user.name.last - a.props.user.name.last
      },
      default: {
        class: 'sort',
        fn: (a, b) => a
      }
    };
    const { currentSort } = this.state;
		let nextSort;

		if (currentSort === 'down') nextSort = 'up';
		else if (currentSort === 'up') nextSort = 'default';
		else if (currentSort === 'default') nextSort = 'down';

		this.setState({
			currentSort: nextSort
		});
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
          // sort={this.onSortChange}
        />
      </div>
    );
  };
};
export default UserContainer;
