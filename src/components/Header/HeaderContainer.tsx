import React from 'react';
import { connect } from 'react-redux';

import { RootStateType } from '../../redux/store.type';
import { Header } from './Header';

export type HeaderContainerType = MapStatePropsType & MapDispatchPropsType;

export type MapStatePropsType = {
  isAuth: boolean;
  login: string | null;
};

export type MapDispatchPropsType = {};

class HeaderAPI extends React.Component<HeaderContainerType> {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export const HeaderContainer = connect(mapStateToProps, {})(HeaderAPI);
