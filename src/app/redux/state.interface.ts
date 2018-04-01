import {IQuizState} from './quiz/quiz.interface';
import {RSAAction} from 'redux-api-middleware';
import {IAuthState} from './auth/auth.interface';

export interface IAppState {
  routes?: any;
  quizes?: IQuizState;
  auth: IAuthState;
}


export type IRSAAction = RSAAction<string, string, string>;
