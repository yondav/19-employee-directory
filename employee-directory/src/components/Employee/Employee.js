import React, { Component } from 'react';
import './employee.css';

import API from '../../utils/API';

class Employee extends Component {
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

  mapEmployees = () => {
    return this.state.employees.map((employee) => {
      const {
        cell,
        email,
        registered: { date },
        location: { city, country, state },
        name: { first, last },
        picture: { large },
      } = employee;

      return (
        <article className='card col-12 col-md-6 col-lg-4 col-xl-3 p-4 employee-card'>
          <img
            src={large}
            alt={`${first} ${last}`}
            className='card-img-top'
          />
          <div className='card-body container'>
            <div className='row'>
              <div className='col d-flex flex-column align-items-center text-center'>
                <h1>{`${first} ${last}`}</h1>
                <h5>{`${city}, ${state}, ${country}`}</h5>
              </div>
            </div>
            <hr />
            <div className='row d-flex justify-content-center '>
              <div className='col-3 d-flex flex-column align-items-end'>
                <h6>Email:</h6>
                <h6>Phone:</h6>
                <h6>Hired:</h6>
              </div>
              <div className='col-6 col-md-8 col-lg-9 d-flex flex-column align-items-start'>
                <h6>{email}</h6>
                <h6>{cell}</h6>
                <h6>{`${new Date(date).getMonth() + 1}/${new Date(
                  date
                ).getDate()}/${new Date(date).getFullYear()}`}</h6>
              </div>
            </div>
          </div>
        </article>
      );
    });
  };
}

// const Employee = ({
//   cell,
//   email,
//   registered: { date },
//   location: { city, country, state },
//   name: { first, last },
//   picture: { large },
// }) => {
//   return (
//     <article className='card col-12 col-md-6 col-lg-4 col-xl-3 p-4 employee-card'>
//       <img
//         src={large}
//         alt={`${first} ${last}`}
//         className='card-img-top'
//       />
//       <div className='card-body container'>
//         <div className='row'>
//           <div className='col d-flex flex-column align-items-center text-center'>
//             <h1>{`${first} ${last}`}</h1>
//             <h5>{`${city}, ${state}, ${country}`}</h5>
//           </div>
//         </div>
//         <hr />
//         <div className='row d-flex justify-content-center '>
//           <div className='col-3 d-flex flex-column align-items-end'>
//             <h6>Email:</h6>
//             <h6>Phone:</h6>
//             <h6>Hired:</h6>
//           </div>
//           <div className='col-6 col-md-8 col-lg-9 d-flex flex-column align-items-start'>
//             <h6>{email}</h6>
//             <h6>{cell}</h6>
//             <h6>{`${new Date(date).getMonth() + 1}/${new Date(
//               date
//             ).getDate()}/${new Date(date).getFullYear()}`}</h6>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

export default Employee;
