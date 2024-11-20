export interface IUserPayload {
  sub: number;
  email: string;
  iat: number;
  exp: number;
}

export interface ICurrentUser {
  id: number;
  email: string;
}

export type IPermissionMeta = {
  can: string[];
};
