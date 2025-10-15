export type User = {
  id: string;
  displayName: string;
  token: string;
  username: string;
  image?: string;
};

export type LoginCreds = {
  email: string;
  password: string;
};

export type RegisterCreds = {
  displayName: string;
  email: string;
  password: string;
};
