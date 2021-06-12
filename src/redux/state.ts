export type PostItemType = {
    id: number;
    message: string;
    likesCount: number;
};

export type DialogsDataType = {
    id: number;
    name: string;
};

export type MessagesDataType = {
    id: number;
    message: string;
};

export type ProfilePageType = {
    postItemData: PostItemType[];
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
            { id: 1, message: 'Hallo Welt', likesCount: 1 },
            { id: 2, message: 'Hallo Welt', likesCount: 10 },
        ],
    },
    dialogsPage: {
        messagesData: [
            { id: 1, message: 'Hallo Welt' },
            { id: 2, message: 'Hallo Welt' },
            { id: 3, message: 'Hallo Welt' },
        ],
        dialogsData: [
            { id: 1, name: 'Roma' },
            { id: 2, name: 'Maxime' },
            { id: 3, name: 'Anya' },
        ],
    },
};

export default state;
