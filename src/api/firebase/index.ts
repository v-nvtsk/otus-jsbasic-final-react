import { Filter } from "../calendar.types";

export declare type AuthData = {
  localId: string;
  idToken: string;
  expiresIn: string;
  refreshToken: string;
};

export type WithId<T> = T & { id: string };

export declare type AuthRequestBody = {
  email: string;
  password: string;
  returnSecureToken: true;
};

export interface IFirebaseCRUD<T> {
  create: (entity: string, data: T) => Promise<string | undefined>;
  read: (entity: string, filter: Partial<Filter>) => Promise<T[] | {}>;
  update: (entity: string, data: WithId<T>) => Promise<WithId<T> | undefined>;
  delete: (entity: string, id: string) => Promise<void>;
}

export declare interface IFirebaseAuth {
  signIn(email: string, password: string): Promise<AuthData | null>;
  signUp(email: string, password: string): Promise<AuthData | null>;
  signOut(): Promise<void>;
  getUserData(): Promise<{ [key: string]: string } | null>;
  renewAuth(token: string): Promise<AuthData | null>;
  resetPassword(email: string): Promise<string | null>;
}

export interface IFirebase<T> extends IFirebaseAuth, IFirebaseCRUD<T> {}

export type FetchOptions<T> = {
  method?: string;
  data?: T;
  params?: { [key: string]: number | string };
};

export type UserData = {
  localId: string;
  email: string;
};
