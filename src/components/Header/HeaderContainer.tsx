import React from 'react';
import { connect } from 'react-redux';

import { RootStateType } from '../../redux/store.type';
import Header from './index';
import { userAuthorization } from '../../redux/thunk/auth-thunk';

export type HeaderContainerType = MapStatePropsType & MapDispatchPropsType;

export type MapStatePropsType = {
  isAuth: boolean;
  login: string | null;
};

export type MapDispatchPropsType = {
  userAuthorization: () => void;
};

class HeaderContainer extends React.Component<HeaderContainerType> {
  componentDidMount() {
    this.props.userAuthorization();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { userAuthorization })(HeaderContainer);
