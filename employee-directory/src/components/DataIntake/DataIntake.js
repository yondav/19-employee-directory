import React, { Component } from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import API from '../../utils/API';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';

class DataIntake extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    countries: [],
  };

  handleCountryChange = (country) => {
    this.setState({
      ...this.state,
      filteredEmployees: this.state.employees.filter(
        (employee) => employee.location.country === country
      ),
    });
  };

  componentDidMount() {
    API().then((results) => {
      this.setState({
        employees: results.data.results,
        filteredEmployees: results.data.results,
        countries: [
          ...new Set(
            results.data.results.map(
              (country) => country.location.country
            )
          ),
        ],
      });
    });
  }

  render() {
    return (
      <>
        <Header />
        <Nav
          countries={this.state.countries}
          handleCountryChange={this.handleCountryChange}
        ></Nav>
        <EmployeeCard
          employees={this.state.filteredEmployees}
          // filtered={this.state.filteredEmployees}
        ></EmployeeCard>
      </>
    );
  }
}

export default DataIntake;
