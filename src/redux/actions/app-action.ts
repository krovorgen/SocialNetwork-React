export type AppActionType = ReturnType<typeof successInitialized>;

export enum AppReducerType {
  CHANGE_STATUS = 'CHANGE_STATUS',
}

export const successInitialized = () =>
  ({
    type: AppReducerType.CHANGE_STATUS,
  } as const);
