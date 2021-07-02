import { v1 } from 'uuid';

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

type AddPostActionType = {
    type: 'ADD-POST';
};

type UpdateNewPostText = {
    type: 'UPDATE-NEW-POST_TEXT';
    newPostText: string;
};

export type ActionTypes = AddPostActionType | UpdateNewPostText;

type StoreType = {
    _state: RooTStateType;
    _callSubscriber: () => void;
    addPostCallback: () => void;
    updateNewPostText: (newPostText: string) => void;
    subscribe: (observer: () => void) => void;
    getState: () => RooTStateType;
    dispatch: (action: ActionTypes) => void;
};

let store: StoreType = {
    _state: {
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
    },
    _callSubscriber() {
        console.log('Main render');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPostCallback() {
        let newPost = { id: v1(), message: this._state.profilePage.newPostText, likesCount: 1 };
        this._state.profilePage.postItemData.push(newPost);
        this.updateNewPostText('');
        this._callSubscriber();
    },
    updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber();
    },
    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                let newPost = {
                    id: v1(),
                    message: this._state.profilePage.newPostText,
                    likesCount: 1,
                };
                this._state.profilePage.postItemData.push(newPost);
                this.updateNewPostText('');
                this._callSubscriber();
                break;
            case 'UPDATE-NEW-POST_TEXT':
                this._state.profilePage.newPostText = action.newPostText;
                this._callSubscriber();
                break;
        }
    },
};

// // @ts-ignore
// window.state = state;

export default store;
