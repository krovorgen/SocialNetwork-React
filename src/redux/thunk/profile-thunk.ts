import { Dispatch } from 'redux';
import { api } from '../../api';
import { setUserProfile, setUserStatus } from '../actions/profile-action';
import { ProfileActionType } from '../actions/types/profile.type';

export const currentProfileWatching =
  (userID: string) => (dispatch: Dispatch<ProfileActionType>) => {
    api.currentUserProfile(userID).then(({ data }) => {
      dispatch(setUserProfile(data));
    });
  };

export const getUserStatus = (userID: string) => (dispatch: Dispatch<ProfileActionType>) => {
  api.getStatus(userID).then(({ data }) => {
    dispatch(setUserStatus(data));
  });
};

export const updateUserStatus = (status: string) => (dispatch: Dispatch<ProfileActionType>) => {
  api.updateStatus(status).then(({ data }) => {
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
};
