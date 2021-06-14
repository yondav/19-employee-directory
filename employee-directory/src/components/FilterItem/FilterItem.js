import React from 'react';
import './filter-item.css';

const FilterItem = ({ location: { country } }) => (
  <button type='button' className='btn btn-light filter-btn'>
    {country}
  </button>
);

export default FilterItem;
