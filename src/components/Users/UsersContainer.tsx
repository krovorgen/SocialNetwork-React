import { connect } from 'react-redux';
import Users from './index';
import { RootStateType } from '../../redux/store.type';
import { UsersActionType } from '../../redux/actions/types/users.type';
import { followAC, unfollowAC } from '../../redux/actions/users-action';

const mapStateToProps = (state: RootStateType) => {
  return {
    usersPage: state.usersPage,
  };
};
const mapDispatchToProps = (dispatch: (action: UsersActionType) => void) => {
  return {
    onFollowUser: (id: string) => {
      dispatch(followAC(id));
    },
    onUnfollowUser: (id: string) => {
      dispatch(unfollowAC(id));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
