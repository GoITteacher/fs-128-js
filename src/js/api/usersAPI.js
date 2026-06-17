import axios from 'axios';

const server = axios.create({
  baseURL: 'https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com',
});

export const getStudents = async () => {
  const res = await server.get('/public/students');
  return res.data;
};

export const getStudentById = id => {};
export const createStudent = body => {};
export const replaceStudent = (id, body) => {};
export const updateStudent = (id, body) => {};
export const deleteStudent = id => {};
