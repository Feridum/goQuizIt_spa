import {RSAA} from 'redux-api-middleware';
import {
  CREATE_QUIZ_FAILURE, CREATE_QUIZ_REQUEST, CREATE_QUIZ_SUCCESS, GET_QUIZ_LIST_FAILURE, GET_QUIZ_LIST_REQUEST,
  GET_QUIZ_LIST_SUCCESS, UPDATE_QUIZ_FAILURE, UPDATE_QUIZ_REQUEST, UPDATE_QUIZ_SUCCESS
} from './quiz.action-types';
import {IRSAAction} from '../state.interface';
import {APP_URL} from '../../constants';


export const createQuiz = (quiz): IRSAAction => {
  return {
    [RSAA]: {
      endpoint: `${APP_URL}/quiz`,
      method: 'POST',
      body: JSON.stringify(quiz),
      types: [CREATE_QUIZ_REQUEST, CREATE_QUIZ_SUCCESS, CREATE_QUIZ_FAILURE]
    }
  };
}


export const getQuizList =  (): IRSAAction => ({
  [RSAA]: {
    endpoint: `${APP_URL}/quiz`,
    method: 'GET',
    types: [GET_QUIZ_LIST_REQUEST, GET_QUIZ_LIST_SUCCESS, GET_QUIZ_LIST_FAILURE]
  }
});

export const updateQuiz =  (quizId, quiz): IRSAAction => ({
  [RSAA]: {
    endpoint: `${APP_URL}/quiz/${quizId}`,
    method: 'PUT',
    body: JSON.stringify(quiz),
    types: [UPDATE_QUIZ_REQUEST, UPDATE_QUIZ_SUCCESS, UPDATE_QUIZ_FAILURE]
  }
});
