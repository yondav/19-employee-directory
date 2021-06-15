import React from 'react';
import FilterItem from '../FilterItem/FilterItem';
import './nav.css';

const Nav = ({ countries }) => {
  return (
    <nav>
      <ul className='nav nav-pills d-flex justify-content-end'>
        <li className='nav-item dropdown'>
          <div className='btn-group'>
            <button
              type='button'
              className='btn btn-light filter-btn'
            >
              Sort By Name
            </button>
          </div>
        </li>
        <li className='nav-item dropdown'>
          <div className='btn-group dropright'>
            <button
              type='button'
              className='btn btn-light dropdown-toggle filter-btn'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Filter By Country
            </button>
            <div className='dropdown-menu'>
              <div className='d-flex flex-column'>
                {countries.map((country) => (
                  <FilterItem country={country.location}></FilterItem>
                ))}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
