import axios from 'axios';

// Export an object containing methods we'll use for accessing the Dog.Ceo API

const API = () => {
  return axios.get('https://randomuser.me/api/?results=10');
};

export default API;
