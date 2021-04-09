import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import Table from "./Table";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for "5" of the randomly generated employees
  componentDidMount() {
    this.searchEmployees("5");
  }

  searchEmployees = query => {
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
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <div>
        <Table data={this.state}/>
      </div>
    );
  }
}

export default EmployeeContainer;
