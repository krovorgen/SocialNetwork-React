import React, { ComponentType } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store.type';

type MapStateToPropsType = {
  isAuth: boolean;
};

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
  return { isAuth: state.auth.isAuth };
};

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: MapStateToPropsType) => {
    let { isAuth, ...restProps } = props;
    if (!isAuth) return <Redirect to={'/login'} />;

    return <Component {...(restProps as T)} />;
  };

  return connect(mapStateToProps)(RedirectComponent);
}
