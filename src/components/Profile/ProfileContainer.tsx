import React from 'react';
import axios from 'axios';

import Profile from './index';
import { IProfileProps } from './types';
import { API_URL } from '../../constants';
import { connect } from 'react-redux';
import Dialogs from '../Dialogs';

class ProfileContainer extends React.Component<IProfileProps> {
  componentDidMount() {
    axios
      .get(`${API_URL}profile/2`, {
        params: {},
      })
      .then(({ data }) => {
        this.props.setUserProfile(data);
      });
  }

  render() {
    return <Profile />;
  }
}

let mapStateToProps = () => {
  return {};
};

let mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
