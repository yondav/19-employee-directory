import axios from 'axios';

const API = () => {
  return axios.get('https://randomuser.me/api/?results=10');
};

export default API;
