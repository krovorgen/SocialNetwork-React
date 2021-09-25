import axios from 'axios';

import { API_KEY, API_URL } from '../constants';
import { UserProfileType } from '../redux/reducers/types';

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
    return instance.get(`auth/me/`);
  },
  currentUserProfile(userID: string) {
    return instance.get<UserProfileType>(`profile/${userID ? userID : '16271'}`);
  },
};
