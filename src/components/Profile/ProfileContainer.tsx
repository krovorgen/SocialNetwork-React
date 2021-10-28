import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import { RootStateType } from '../../redux/store.type';
import { IProfileContainerPropsType } from './types';
import { currentProfileWatching } from '../../redux/thunk/profile-thunk';
import { Profile } from './Profile';

class ProfileAPI extends React.Component<IProfileContainerPropsType> {
  componentDidMount() {
    let userID: string = this.props.match.params.userID;
    this.props.currentProfileWatching(userID);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'} />;
    return <Profile profile={this.props.profile} />;
  }
}

let mapStateToProps = (state: RootStateType) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

let WithUrlDataContainerComponent = withRouter(ProfileAPI);

export const ProfileContainer = connect(mapStateToProps, { currentProfileWatching })(
  WithUrlDataContainerComponent
);
