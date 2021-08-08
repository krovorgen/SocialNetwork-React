import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Profile from './index';
import { API_URL } from '../../constants';
import { setUserProfile } from '../../redux/actions/profile-action';
import { RootStateType } from '../../redux/store.type';
import { UserProfileType } from '../../redux/reducers/types';
import { withRouter } from 'react-router-dom';
import { IProfileContainerPropsType } from './types';

class ProfileContainer extends React.Component<IProfileContainerPropsType> {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    axios.get<UserProfileType>(`${API_URL}profile/${userID ? userID : '2'}`).then(({ data }) => {
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
