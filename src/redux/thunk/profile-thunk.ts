import { Dispatch } from 'redux';
import { api } from '../../api';
import { ProfileActionType, setUserProfile, setUserStatus } from '../actions/profile-action';
import { toast } from 'react-toastify';

export const currentProfileWatching = (userID: number) => (dispatch: Dispatch<ProfileActionType>) => {
  api.currentUserProfile(userID).then(({ data }) => {
    dispatch(setUserProfile(data));
  });
};

export const getUserStatus = (userID: number) => (dispatch: Dispatch<ProfileActionType>) => {
  api.getStatus(userID).then(({ data }) => {
    dispatch(setUserStatus(data));
  });
};

export const updateUserStatus = (status: string) => (dispatch: Dispatch<ProfileActionType>) => {
  api.updateStatus(status).then(({ data }) => {
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status));
      toast.success('Статус успешно обновлён');
    }
  });
};
