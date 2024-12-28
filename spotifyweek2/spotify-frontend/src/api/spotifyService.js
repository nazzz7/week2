import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const register = async (userData) => {
  return axios.post(`${API_BASE}/auth/register`, userData);
};

export const login = async (credentials) => {
  return axios.post(`${API_BASE}/auth/signin`, credentials);
};

export const fetchSongs = async () => {
  return axios.get(`${API_BASE}/spotify/songs`);
};

export const searchSpotify = async (query) => {
  return axios.get(`${API_BASE}/spotify/search`, { params: { query } });
};
