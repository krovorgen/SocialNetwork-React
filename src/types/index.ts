import { ActionTypes, RootStateType } from '../redux/store.type';

export interface IAppProps {
  state: RootStateType;
  dispatch: (action: ActionTypes) => void;
}
