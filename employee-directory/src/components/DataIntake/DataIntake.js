import React, { Component } from 'react';
import API from '../../utils/API';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';

class DataIntake extends Component {
  state = {
    employees: [{}],
    filteredEmployees: [{}],
    countries: [{}],
  };

  componentDidMount() {
    API().then((results) => {
      this.setState({
        employees: results.data.results,
        filteredEmployees: results.data.results,
        countries: results.data.results,
      });
    });
  }

  render() {
    return (
      <>
        <Header />
        <Nav countries={this.state.countries}></Nav>
      </>
    );
  }
}

export default DataIntake;
