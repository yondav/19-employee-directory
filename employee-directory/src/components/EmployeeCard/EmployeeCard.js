import React, { Component } from 'react';
import Employee from '../Employee/Employee';
import API from '../../utils/API';
import './employee-card.css';

class EmployeeCard extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    API()
      .then((res) => {
        console.log(res.data.results);
        this.setState({ employees: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        {this.state.employees.map((employee) => {
          return (
            <Employee
              key={employee.login.uuid}
              {...employee}
            ></Employee>
          );
        })}
      </>
    );
  }
}

export default EmployeeCard;
