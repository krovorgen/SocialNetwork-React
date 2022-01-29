import { Dispatch } from 'redux';
import { userAuthorization } from './auth-thunk';
import { successInitialized } from '../actions/app-action';

export const initializedApp = () => (dispatch: Dispatch<any>) => {
  let promise = dispatch(userAuthorization());
  //@ts-ignore
  promise.then(() => {
    dispatch(successInitialized());
  });
};
