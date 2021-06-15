import React from 'react';
import Employee from '../Employee/Employee';

const EmployeeCard = ({ employees }) => {
  return (
    <div className='row d-flex justify-content-center card-row'>
      {employees.map((employee) => (
        <div
          className='col-sm-12 col-md-6 col-lg-4'
          key={employee.login.uuid}
        >
          <Employee {...employee}></Employee>
        </div>
      ))}
    </div>
  );
};

export default EmployeeCard;
