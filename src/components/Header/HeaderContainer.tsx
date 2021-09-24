import React from 'react';
import { AuthDataType } from '../../redux/reducers/types';
import Header from './index';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store.type';
import axios from 'axios';
import { API_URL } from '../../constants';
import { setUserData } from '../../redux/actions/auth-action';

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
    axios
      .get(`${API_URL}auth/me/`, {
        withCredentials: true,
      })
      .then(({ data }) => {
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
