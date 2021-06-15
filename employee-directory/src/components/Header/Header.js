import React from 'react';
import Nav from '../Nav/Nav';
import './header.css';

const Header = (props) => {
  return (
    <header className='d-flex flex-column justify-content-center align-items-center'>
      <h1 className='p-5'>Employees</h1>
      <Nav
        countries={props.countries}
        genders={props.genders}
        handleCountryChange={props.handleCountryChange}
        handleGenderFilter={props.handleGenderFilter}
        sortDateHired={props.sortDateHired}
      ></Nav>
    </header>
  );
};

export default Header;
