import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { RootStateType } from '../../redux/store.type';
import { IProfileContainerPropsType } from './types';
import { currentProfileWatching, getUserStatus, updateUserStatus } from '../../redux/thunk/profile-thunk';
import { Profile } from './Profile';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';

class ProfileAPI extends React.Component<IProfileContainerPropsType> {
  componentDidMount() {
    let userID: number = +this.props.match.params.userID;
    if (!userID) {
      userID = this.props.auth?.id || 0;
    }
    this.props.currentProfileWatching(+userID);
    this.props.getUserStatus(+userID);
  }

  render() {
    return <Profile profile={this.props.profile} updateUserStatus={this.props.updateUserStatus} />;
  }
}

let mapStateToProps = (state: RootStateType) => ({
  profile: state.profilePage.profile,
  auth: state.auth,
});

export const ProfileContainer = compose<ComponentType>(
  WithAuthRedirect,
  connect(mapStateToProps, {
    currentProfileWatching,
    getUserStatus,
    updateUserStatus,
  }),
  withRouter
)(ProfileAPI);
