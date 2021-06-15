import React, { useCallback } from 'react';
import FilterItem from '../FilterItem/FilterItem';
import './nav.css';

const Nav = (props) => {
  let {
    countries,
    genders,
    handleCountryChange,
    handleGenderFilter,
    sortDateHired,
  } = props;

  const handleCountryFilterChange = useCallback(
    (country) => {
      console.log(country);
      handleCountryChange(country);
    },
    [handleCountryChange]
  );

  const handleGenderFilterChange = useCallback(
    (gender) => {
      console.log(gender);
      handleGenderFilter(gender);
    },
    [handleGenderFilter]
  );

  const handleSort = useCallback(
    (date) => {
      console.log(date);
      sortDateHired();
    },
    [sortDateHired]
  );

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
                {countries.map((country) => (
                  <FilterItem
                    key={country}
                    option={country}
                    handleFilterChange={handleCountryFilterChange}
                  ></FilterItem>
                ))}
              </div>
            </div>
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
              Filter By Gender
            </button>
            <div className='dropdown-menu'>
              <div className='d-flex flex-column'>
                {genders.map((gender) => (
                  <FilterItem
                    key={gender}
                    option={gender}
                    handleFilterChange={handleGenderFilterChange}
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
