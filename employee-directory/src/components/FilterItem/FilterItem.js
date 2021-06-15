import React from 'react';
import './filter-item.css';

const FilterItem = ({ option, handleFilterChange }) => (
  <button
    type='button'
    className='btn btn-light filter-btn'
    onClick={() => {
      handleFilterChange(option);
    }}
  >
    {option}
  </button>
);

export default FilterItem;
