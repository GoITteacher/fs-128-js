import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com/public',
  headers: { ACCESS_TOKEN: '******' },
  params: { testParam: 'TOKEN' },
});

export const getBookById = () => {};

export const getBooks = () => {
  const res = axiosInstance.get('/books');
  return res.then(res => res.data);
};

export const createBook = bookData => {
  const res = axiosInstance.post('/books', bookData);
  return res.then(res => res.data);
};

export const updateBook = (id, body) => {
  const res = axiosInstance.patch(`/books/${id}`, body);
  return res.then(res => res.data);
};

export const resetBook = (id, body) => {
  const res = axiosInstance.put(`/books/${id}`, body);
  return res.then(res => res.data);
};

export const deleteBook = id => {
  const res = axiosInstance.delete(`/books/${id}`);
  return res.then(res => res.data);
};

//!=========================================
