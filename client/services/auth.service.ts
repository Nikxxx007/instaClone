import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const register = async (userData: any) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  if (response.data.access_token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const login = async (userData: any) => {
  const response = await axios.post(`${API_URL}/auth/login`, userData);
  if (response.data.access_token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user') as string);
};