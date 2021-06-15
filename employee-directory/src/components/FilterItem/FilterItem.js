import React from 'react';
import './filter-item.css';

const FilterItem = ({ country }) => (
  <button type='button' className='btn btn-light filter-btn'>
    {console.log(country)}
  </button>
);

export default FilterItem;
