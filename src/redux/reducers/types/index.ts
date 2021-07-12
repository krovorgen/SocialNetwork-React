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
export type ProfileStateType = {
    postItemData: PostItemType[];
    newPostText: string;
};
export type DialogsStateType = {
    messagesData: MessagesDataType[];
    dialogsData: DialogsDataType[];
    newMessageText: string;
};
