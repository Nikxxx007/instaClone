import axios from 'axios';
import {LoginUserDto, RegisterUserDto} from "@/services/models";

const API_URL = 'http://localhost:3000';

export const register = async (userData: RegisterUserDto) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  if (response.data.access_token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const login = async (userData: LoginUserDto) => {
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