import React from 'react';
import './employee.css';

const Employee = ({
  cell,
  email,
  registered: { date },
  location: { city, country, state },
  name: { first, last },
  picture: { large },
  id: { value },
}) => (
  <article key={value} className='card p-4 employee-card'>
    <img
      src={large}
      alt={`${first} ${last}`}
      className='card-img-top'
    />
    <div className='card-body container'>
      <div className='row'>
        <div className='col d-flex flex-column align-items-center text-center'>
          <h1>{`${first} ${last}`}</h1>
          <h2>{city}</h2>
          <h2>{`${state}, ${country}`}</h2>
        </div>
      </div>
      <hr />
      <div className='row d-flex justify-content-center m-0'>
        <div className='col-3 col-md-2 d-flex flex-column align-items-end'>
          <p>Email:</p>
          <p>Phone:</p>
          <p>Hired:</p>
        </div>
        <div className='col-6 col-md-10 col-lg-10 d-flex flex-column align-items-start'>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            <a href={`tel:+${cell}`}>{cell}</a>
          </p>
          <p>{`${new Date(date).getMonth() + 1}/${new Date(
            date
          ).getDate()}/${new Date(date).getFullYear()}`}</p>
        </div>
      </div>
    </div>
  </article>
);

export default Employee;
