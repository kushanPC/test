import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/',
});

export const getUsers = (page, count) => instance.get(`users?page=${page}&count=${count}`)
  .then((response) => (response.data));


export const addUsers = (url) => axios.get(url)
  .then((response) => (response.data));

export const getToken = () => instance.get('token')
  .then((response) => (response.data.token));

export const getPositions = () => instance.get('positions')
  .then((response) => (response.data.positions));


export const registerUser = (formData, token) => axios.post('https://frontend-test-assignment-api.abz.agency/api/v1/users',
  formData, {
    headers: { Token: token },
  }).then((response) => (response));
