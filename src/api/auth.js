import axios from './axios.js'

export const registerRequest = (user) => axios.post('/register', user);

export const loginRequest = (user) => axios.post('/login', user);

export const verifyTokenRequest = () => axios.get('/verify');

export const logoutRequest = () => axios.post('/logout');

export const getUsersRequest = () => axios.get('/admin');

export const updateUserRequest = (user) => axios.post('/admin',user);

export const updateLastLogin = (user) => axios.post('/updateLog',user);