import axios from 'axios';

const API = () => {
  return axios.get('https://randomuser.me/api/?results=33');
};

export default API;
