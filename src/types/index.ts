import { ActionTypes, RootStateType } from '../redux/store.type';

export interface IAppProps {
  dispatch: (action: ActionTypes) => void;
}
