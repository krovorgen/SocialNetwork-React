export enum DialogsReducerType {
  ADD_MESSAGE = 'ADD-MESSAGE',
}

export type DialogsActionType = ReturnType<typeof addMessageAC>;

export const addMessageAC = (messageValue: string) =>
  ({
    type: DialogsReducerType.ADD_MESSAGE,
    payload: messageValue,
  } as const);
