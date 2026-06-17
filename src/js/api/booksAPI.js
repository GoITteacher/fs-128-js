import axios from 'axios';

axios.defaults.baseURL =
  'https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com/public';

export const getBookList = () => {
  return axios.get('/books').then(res => res.data);
};

export const getBookById = id => {
  return axios.get(`/books/${id}`).then(res => res.data);
};

export const createBook = body => {
  return axios.post('/books', body).then(res => res.data);
};

export const updateBook = (id, body) => {
  return axios.patch(`/books/${id}`, body).then(res => res.data);
};

export const resetBook = (id, body) => {
  return axios.put(`/books/${id}`, body).then(res => res.data);
};

export const deleteBook = id => {
  return axios.delete(`/books/${id}`);
};

//!=========================================
// export const createBook = body => {
//   const BASE_URL = '';
//   const END_POINT = '';
//   const url = BASE_URL + END_POINT;

//   const options = {
//     method: 'POST',
//     body: JSON.stringify(body),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   return fetch(url, options).then(res => res.json());
// };
