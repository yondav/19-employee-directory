import React, { Component } from 'react';
import Employee from '../Employee/Employee';
import API from '../../utils/API';
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
      <div className='row d-flex justify-content-center card-row'>
        {this.state.employees.map((employee) => (
          <div
            className='col-sm-12 col-md-6 col-lg-4'
            key={employee.login.uuid}
          >
            <Employee {...employee}></Employee>
          </div>
        ))}
      </div>
    );
  }
}

export default EmployeeCard;
