import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './index';
import { setUserProfile } from '../../redux/actions/profile-action';
import { RootStateType } from '../../redux/store.type';
import { IProfileContainerPropsType } from './types';
import { api } from '../../api';

class ProfileContainer extends React.Component<IProfileContainerPropsType> {
  componentDidMount() {
    let userID: string = this.props.match.params.userID;
    api.currentUserProfile(userID).then(({ data }) => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

let mapStateToProps = (state: RootStateType) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);
