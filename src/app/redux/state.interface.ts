import {IQuizState} from './quiz/quiz.interface';
import {RSAAction} from 'redux-api-middleware';
import {IAuthState} from './auth/auth.interface';

export interface IAppState {
  routes?: any;
  quizes?: IQuizState;
  auth: IAuthState;
}

type IRSAAType = string | {
  type: string,
  meta: any
};

export type IRSAAction = RSAAction<IRSAAType, IRSAAType, IRSAAType>;
