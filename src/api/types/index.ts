export type ResponseType = {
  data: AuthDataType;
  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
};
export type AuthDataType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};
