import React, { Component } from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import API from '../../utils/API';
import Header from '../Header/Header';
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

  sortDateHired = () => {
    this.setState({
      ...this.state,
      filteredEmployees: this.state.employees.sort((a, b) => {
        return a.registered.age - b.registered.age;
      }),
    });
    // const sortedEmployees = this.state.employees.sort((a, b) => {
    //   return a.registered.date - b.registered.date;
    // });
    // this.setState({ sortedEmployees });
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
        <Header
          countries={this.state.countries}
          handleCountryChange={this.handleCountryChange}
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
