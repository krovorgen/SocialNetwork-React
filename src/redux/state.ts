import { v1 } from 'uuid';
import { rerenderEntireTree } from '../render';

export type PostItemType = {
    id: string;
    message: string;
    likesCount: number;
};

export type DialogsDataType = {
    id: string;
    name: string;
};

export type MessagesDataType = {
    id: string;
    message: string;
};

export type ProfilePageType = {
    postItemData: PostItemType[];
    newPostText: string;
};

export type DialogsPageType = {
    messagesData: MessagesDataType[];
    dialogsData: DialogsDataType[];
};

export type RooTStateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
};

let state: RooTStateType = {
    profilePage: {
        postItemData: [
            { id: v1(), message: 'Hallo Welt', likesCount: 1 },
            { id: v1(), message: 'Hallo Welt', likesCount: 10 },
        ],
        newPostText: '',
    },
    dialogsPage: {
        messagesData: [
            { id: v1(), message: 'Hallo Welt' },
            { id: v1(), message: 'Hallo Welt' },
            { id: v1(), message: 'Hallo Welt' },
        ],
        dialogsData: [
            { id: v1(), name: 'Roma' },
            { id: v1(), name: 'Maxime' },
            { id: v1(), name: 'Anya' },
        ],
    },
};

export let addPostCallback = () => {
    let newPost = { id: v1(), message: state.profilePage.newPostText, likesCount: 1 };
    state.profilePage.postItemData.push(newPost);
    updateNewPostText('');
    rerenderEntireTree(state);
};

export let updateNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
};

// @ts-ignore
window.state = state;

export default state;
