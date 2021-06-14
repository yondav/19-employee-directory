import React, { Component } from 'react';
import FilterItem from '../FilterItem/FilterItem';
import API from '../../utils/API';
import './nav.css';

class Nav extends Component {
  state = {
    countries: [],
    genders: [],
  };

  componentDidMount() {
    API()
      .then((res) => {
        console.log(res.data.results);
        this.setState({ countries: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <nav>
        <ul className='nav nav-pills d-flex justify-content-end'>
          <li className='nav-item dropdown'>
            <div className='btn-group dropright'>
              <button
                type='button'
                className='btn btn-light dropdown-toggle'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Sort
              </button>
              <div className='dropdown-menu'>
                <ul>
                  <li>By Name</li>
                  <li>By Age</li>
                </ul>
              </div>
            </div>
          </li>
          <li className='nav-item dropdown'>
            <div className='btn-group dropright'>
              <button
                type='button'
                className='btn btn-light dropdown-toggle'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Filter By Country
              </button>
              <div className='dropdown-menu'>
                <div className='d-flex flex-column'>
                  {this.state.countries.map((country) => (
                    <FilterItem
                      key={country.login.uuid}
                      {...country}
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
                className='btn btn-light dropdown-toggle'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Filter By Gender
              </button>
              <div className='dropdown-menu'>
                <div className='d-flex flex-column'>
                  {this.state.genders.map((gender) => (
                    <FilterItem
                      key={gender.login.uuid}
                      {...gender}
                    ></FilterItem>
                  ))}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
