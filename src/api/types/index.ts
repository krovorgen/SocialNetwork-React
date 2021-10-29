export type AuthUserAPIType = {
  data: AuthDataType;
  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
};
export type AuthDataType = {
  id: number | null;
  email: string | null;
  login: string | null;
};
