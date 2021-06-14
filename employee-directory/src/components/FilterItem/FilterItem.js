import React from 'react';

const FilterItem = ({ location: { country } }) => (
  <button type='button' className='btn btn-light'>
    {country}
  </button>
);

export default FilterItem;
