import { ProfileStateType } from '../../../redux/reducers/types';
import { ActionTypes } from '../../../redux/store.type';

export interface IProfileProps {
  profilePage: ProfileStateType;
  dispatch: (action: ActionTypes) => void;
}
