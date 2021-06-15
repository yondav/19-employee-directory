import React, { useCallback } from 'react';
import FilterItem from '../FilterItem/FilterItem';
import './nav.css';

const Nav = (props) => {
  const handleFilterChange = useCallback((country) => {
    console.log(country);
    props.handleCountryChange(country);
  }, []);

  const handleSort = useCallback((date) => {
    console.log(date);
    props.sortDateHired();
  }, []);

  return (
    <nav>
      <ul className='nav nav-pills d-flex justify-content-end'>
        <li className='nav-item dropdown'>
          <div className='btn-group'>
            <button
              type='button'
              className='btn btn-light filter-btn'
              onClick={handleSort}
            >
              Sort By Date Hired
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
                {props.countries.map((country) => (
                  <FilterItem
                    key={country}
                    country={country}
                    handleFilterChange={handleFilterChange}
                  ></FilterItem>
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
