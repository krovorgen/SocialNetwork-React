import { Dispatch } from 'redux';
import { api } from '../../api';
import { setUserData } from '../actions/auth-action';
import { toast } from 'react-toastify';

export const userAuthorization = () => (dispatch: Dispatch) => {
  return api.authUser().then(({ data }) => {
    data.resultCode === 0 && dispatch(setUserData({ ...data.data, isAuth: true }));
  });
};

export const userLogin = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
  api.loginUser(email, password, rememberMe).then(({ data }) => {
    if (data.resultCode === 0) {
      dispatch(userAuthorization());
      toast.success('Вы успешно вошли');
    }
    if (data.resultCode !== 0) {
      data.messages.forEach((message: string) => toast.error(message));
    }
  });
};

export const userLogout = () => (dispatch: Dispatch<any>) => {
  api.logoutUser().then(() => {
    dispatch(setUserData({ id: null, email: null, login: null, isAuth: false }));
    toast.success('Вы успешно разлогинены');
  });
};
