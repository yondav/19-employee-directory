import React from 'react';
import Nav from '../Nav/Nav';
import './header.css';

const Header = ({
  countries,
  handleCountryChange,
  sortDateHired,
}) => {
  return (
    <header className='d-flex flex-column justify-content-center align-items-center'>
      <h1 className='p-5'>Employees</h1>
      <Nav
        countries={countries}
        handleCountryChange={handleCountryChange}
        sortDateHired={sortDateHired}
      ></Nav>
    </header>
  );
};

export default Header;
