import axios from 'axios';

import { API_KEY, API_URL } from '../constants';
import { UserProfileType } from '../redux/reducers/types';
import { ResponseType } from './types';

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': API_KEY,
  },
  baseURL: API_URL,
});

export const api = {
  getUsers(page: number, count: number) {
    return instance.get(`users/`, {
      params: {
        page,
        count,
      },
    });
  },
  subscribeUser(userID: string) {
    return instance.post(`follow/${userID}`, {}, {});
  },
  unsubscribeUser(userID: string) {
    return instance.delete(`follow/${userID}`, {});
  },
  authUser() {
    return instance.get<ResponseType>(`auth/me/`);
  },
  loginUser(email: string, password: string, rememberMe: boolean) {
    return instance.post(`auth/login/`, { email, password, rememberMe });
  },
  logoutUser() {
    return instance.delete(`/auth/login`);
  },
  currentUserProfile(userID: string) {
    return instance.get<UserProfileType>(`profile/${userID ? userID : '16271'}`);
  },
  getStatus(userID: string) {
    return instance.get<string>(`profile/status/${userID ? userID : '16271'}`);
  },
  updateStatus(status: string) {
    return instance.put<ResponseType>(`profile/status/`, { status });
  },
};
