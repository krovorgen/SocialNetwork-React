import { Dispatch } from 'redux';
import { api } from '../../api';
import { setUserProfile } from '../actions/profile-action';
import { ProfileActionType } from '../actions/types/profile.type';

export const currentProfileWatching =
  (userID: string) => (dispatch: Dispatch<ProfileActionType>) => {
    api.currentUserProfile(userID).then(({ data }) => {
      dispatch(setUserProfile(data));
    });
  };
