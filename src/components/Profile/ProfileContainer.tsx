import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { RootStateType } from '../../redux/store.type';
import { IProfileContainerPropsType } from './types';
import { currentProfileWatching } from '../../redux/thunk/profile-thunk';
import { Profile } from './Profile';
import { WithAuthRedirect } from '../WithAuthRedirect';

class ProfileAPI extends React.Component<IProfileContainerPropsType> {
  componentDidMount() {
    let userID: string = this.props.match.params.userID;
    this.props.currentProfileWatching(userID);
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

let mapStateToProps = (state: RootStateType) => ({
  profile: state.profilePage.profile,
});

export const ProfileContainer = WithAuthRedirect(
  connect(mapStateToProps, { currentProfileWatching })(withRouter(ProfileAPI))
);
