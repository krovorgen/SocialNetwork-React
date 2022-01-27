import { ComponentType } from 'react';

import { addMessageAC, DialogsActionType } from '../../../redux/actions/dialogs-action';
import { connect } from 'react-redux';
import { RootStateType } from '../../../redux/store.type';
import { MapDispatchPropsType, MapStatePropsType } from './types';
import { Dialogs } from './Dialogs';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  dialogsPage: state.dialogsPage,
});

let mapDispatchToProps = (dispatch: (arg0: DialogsActionType) => void): MapDispatchPropsType => ({
  addMessage: (messageValue: string) => {
    dispatch(addMessageAC(messageValue));
  },
});

export const DialogsContainer = compose<ComponentType>(
  WithAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
