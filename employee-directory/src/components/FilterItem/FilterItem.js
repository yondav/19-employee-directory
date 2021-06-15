import React from 'react';
import './filter-item.css';

const FilterItem = ({ country, handleFilterChange }) => (
  <button
    type='button'
    className='btn btn-light filter-btn'
    onClick={() => {
      handleFilterChange(country);
    }}
  >
    {country}
  </button>
);

export default FilterItem;
