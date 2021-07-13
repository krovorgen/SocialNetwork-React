import { ChangeEvent } from 'react';

import { addPostAC, updateNewPostTextAC } from '../../redux/actions/profile-action';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store.type';
import { ProfileActionType } from '../../redux/actions/types/profile.type';
import { Posts } from '../index';

const mapStateToProps = (state: RootStateType) => {
  return {
    postItemData: state.profilePage.postItemData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch: (arg0: ProfileActionType) => void) => {
  return {
    addPost: () => dispatch(addPostAC()),
    onChangeTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(updateNewPostTextAC(e.currentTarget.value));
    },
  };
};

const SuperPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default SuperPostsContainer;
