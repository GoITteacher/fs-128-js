import './modules/binance';
import './modules/hero';
import './modules/quotes';
import './modules/ipfinder';
import './modules/pokemon';
import './modules/instagram';
import './modules/user';

// ====================================

/* function getPostsByUser(userId) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/posts';
  const PARAMS = `?userId=${userId}`;
  const url = BASE_URL + END_POINT + PARAMS;

  const options = {
    headers: {
      test_header: 'Volodka',
    },
  };

  return fetch(url, options).then(res => res.json());
} */

//!=========================================

// const base_url = 'https://jsonplaceholder.typicode.com';
// const END_POINT = '/users';
// const url = base_url + END_POINT;

// fetch(url)
//   .then(res => {
//     return res.json();
//   })
//   .then(data => {
//     console.log(data);
//   });

//!=========================================

// function fetchUsers() {
//   const baseUrl = 'https://jsonplaceholder.typicode.com';
//   const endPoint = '/users';
//   const url = baseUrl + endPoint;

//   const headers = {
//     'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
//   };

//   return fetch(url, {}).then(res => res.json());
// }
