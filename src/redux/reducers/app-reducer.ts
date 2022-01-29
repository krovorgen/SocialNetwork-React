import { AppActionType, AppReducerType } from '../actions/app-action';

type AppStateType = {
  initializedStatus: boolean;
};

const initialState: AppStateType = {
  initializedStatus: false,
};

export const appReducer = (state = initialState, action: AppActionType): AppStateType => {
  switch (action.type) {
    case AppReducerType.CHANGE_STATUS:
      return { ...state, initializedStatus: true };
    default:
      return state;
  }
};
