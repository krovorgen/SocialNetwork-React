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
    return instance.get<GetUsersRT>(`users/`, {
      params: {
        page,
        count,
      },
    });
  },
  subscribeUser(userID: number) {
    return instance.post<ResponseType>(`follow/${userID}`, {}, {});
  },
  unsubscribeUser(userID: number) {
    return instance.delete<ResponseType>(`follow/${userID}`, {});
  },
  authUser() {
    return instance.get<ResponseType<AuthUserRT>>(`auth/me/`);
  },
  loginUser(email: string, password: string, rememberMe: boolean) {
    return instance.post<ResponseType<LoginActionUserRT>>(`auth/login/`, { email, password, rememberMe });
  },
  logoutUser() {
    return instance.delete<ResponseType<LoginActionUserRT>>(`/auth/login`);
  },
  currentUserProfile(userID: number) {
    return instance.get<UserProfileType>(`profile/${userID ? userID : '16271'}`);
  },
  getStatus(userID: number) {
    return instance.get<string>(`profile/status/${userID ? userID : '16271'}`);
  },
  updateStatus(status: string) {
    return instance.put<any>(`profile/status/`, { status });
  },
};

enum ResultCode {
  Success,
  Error,
}

export type ResponseType<T = Object> = {
  resultCode: ResultCode;
  messages: string[];
  data: T;
};

type AuthUserRT = {
  id: number;
  email: string;
  login: string;
};

export type GetUsersItemRT = {
  name: string;
  id: number;
  photos: {
    small: null | string;
    large: null | string;
  };
  status: null | string;
  followed: boolean;
};

type GetUsersRT = {
  items: GetUsersItemRT[];
  totalCount: number;
  error: null | string;
};

type LoginActionUserRT = {
  userId: number;
};
