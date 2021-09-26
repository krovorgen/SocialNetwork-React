import { Dispatch } from 'redux';

import { AuthActionType } from '../actions/types/auth.type';
import { api } from '../../api';
import { setUserData } from '../actions/auth-action';

export const userAuthorization = () => (dispatch: Dispatch<AuthActionType>) => {
  api.authUser().then(({ data }) => {
    data.resultCode === 0 && dispatch(setUserData(data.data));
  });
};
