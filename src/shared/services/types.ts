import {RestClient} from 'src/shared/services/restClient.ts';

export type User = {
  gender: Gender;
};

export type Gender = 'male' | 'female' | 'unspecified';

export type SessionServiceConstructorParams = {
  restClient: RestClient;
};

export enum SessionStatus {
  InProgress = 'inProgress',
  Authorized = 'authorized',
  NotAuthorized = 'notAuthorized',
}
