import React, { Component } from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import API from '../../utils/API';
import Header from '../Header/Header';
class DataIntake extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    countries: [],
    genders: [],
  };

  handleCountryChange = (country) => {
    this.setState({
      ...this.state,
      filteredEmployees: this.state.employees.filter(
        (employee) => employee.location.country === country
      ),
    });
  };

  sortDateHired = () => {
    this.setState({
      ...this.state,
      filteredEmployees: this.state.employees.sort((a, b) => {
        return (
          new Date(a.registered.date).getTime() -
          new Date(b.registered.date).getTime()
        );
      }),
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
        genders: [
          ...new Set(
            results.data.results.map((gender) => gender.gender)
          ),
        ],
      });
    });
  }

  render() {
    return (
      <>
        <Header
          countries={this.state.countries}
          genders={this.state.genders}
          handleCountryChange={this.handleCountryChange}
          handleGenderFilter={this.handleGenderFilter}
          sortDateHired={this.sortDateHired}
        ></Header>
        <EmployeeCard
          employees={this.state.filteredEmployees}
        ></EmployeeCard>
      </>
    );
  }
}

export default DataIntake;
