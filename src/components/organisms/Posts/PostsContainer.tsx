import { addPostAC } from '../../../redux/actions/profile-action';
import { connect } from 'react-redux';
import { RootStateType } from '../../../redux/store.type';
import { ProfileActionType } from '../../../redux/actions/types/profile.type';
import { MapDispatchPropsType, MapStatePropsType } from './types';
import { Posts } from './Posts';

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  postItemData: state.profilePage.postItemData,
});

const mapDispatchToProps = (dispatch: (arg0: ProfileActionType) => void): MapDispatchPropsType => {
  return {
    addPost: (value) => dispatch(addPostAC(value)),
  };
};

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
