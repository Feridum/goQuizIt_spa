import {RSAA, RSAAction} from 'redux-api-middleware';
import {
  CREATE_QUIZ_FAILURE, CREATE_QUIZ_REQUEST, CREATE_QUIZ_SUCCESS, GET_QUIZ_LIST_FAILURE, GET_QUIZ_LIST_REQUEST,
  GET_QUIZ_LIST_SUCCESS, UPDATE_QUIZ_FAILURE, UPDATE_QUIZ_REQUEST, UPDATE_QUIZ_SUCCESS
} from './quiz.action-types';
import {IRSAAction} from '../state.interface';


export const createQuiz = (): IRSAAction => ({
  [RSAA]: {
    endpoint: 'localhost/api/quiz',
    method: 'GET',
    types: [CREATE_QUIZ_REQUEST, CREATE_QUIZ_SUCCESS, CREATE_QUIZ_FAILURE]
  }
});


export const getQuizList =  (): IRSAAction => ({
  [RSAA]: {
    endpoint: 'localhost/api/quiz',
    method: 'GET',
    types: [GET_QUIZ_LIST_REQUEST, GET_QUIZ_LIST_SUCCESS, GET_QUIZ_LIST_FAILURE]
  }
});

export const updateQuiz =  (): IRSAAction => ({
  [RSAA]: {
    endpoint: 'localhost/api/quiz',
    method: 'GET',
    types: [UPDATE_QUIZ_REQUEST, UPDATE_QUIZ_SUCCESS, UPDATE_QUIZ_FAILURE]
  }
});
