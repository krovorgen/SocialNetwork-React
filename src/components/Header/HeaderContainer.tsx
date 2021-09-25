import React from 'react';
import { connect } from 'react-redux';

import { AuthDataType } from '../../redux/reducers/types';
import { RootStateType } from '../../redux/store.type';
import { setUserData } from '../../redux/actions/auth-action';
import Header from './index';
import { api } from '../../api';

export type HeaderContainerType = MapStatePropsType & MapDispatchPropsType;

export type MapStatePropsType = {
  isAuth: boolean;
  login: string | null;
};

export type MapDispatchPropsType = {
  setUserData: (newAuthData: AuthDataType) => void;
};

class HeaderContainer extends React.Component<HeaderContainerType> {
  componentDidMount() {
    api.authUser().then(({ data }) => {
      data.resultCode === 0 && this.props.setUserData(data.data);
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
