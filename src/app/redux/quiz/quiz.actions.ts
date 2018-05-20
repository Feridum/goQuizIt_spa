import {RSAA} from 'redux-api-middleware';
import {
  CREATE_QUIZ_FAILURE, CREATE_QUIZ_REQUEST, CREATE_QUIZ_SUCCESS, GET_ACTIVE_QUIZ_LIST_FAILURE, GET_ACTIVE_QUIZ_LIST_REQUEST,
  GET_ACTIVE_QUIZ_LIST_SUCCESS,
  GET_INACTIVE_QUIZ_LIST_FAILURE,
  GET_INACTIVE_QUIZ_LIST_REQUEST,
  GET_INACTIVE_QUIZ_LIST_SUCCESS, SET_QUIZ_ACTIVE_FAILURE, SET_QUIZ_ACTIVE_REQUEST, SET_QUIZ_ACTIVE_SUCCESS, UPDATE_QUIZ_FAILURE,
  UPDATE_QUIZ_REQUEST, UPDATE_QUIZ_SUCCESS
} from './quiz.action-types';
import {IRSAAction} from '../state.interface';
import {API_URL} from '../../constants';


export const createQuiz = (quiz): IRSAAction => {
  return {
    [RSAA]: {
      endpoint: `${API_URL}/quiz`,
      method: 'POST',
      body: quiz,
      types: [CREATE_QUIZ_REQUEST, CREATE_QUIZ_SUCCESS, CREATE_QUIZ_FAILURE]
    }
  };
}

export const setQuizActive = (quizId): IRSAAction => {
  return {
    [RSAA]: {
      endpoint: `${API_URL}/quiz/${quizId}/patch/ACTIVE`,
      method: 'PUT',
      types: [SET_QUIZ_ACTIVE_REQUEST, SET_QUIZ_ACTIVE_SUCCESS, SET_QUIZ_ACTIVE_FAILURE]
    }
  };
}

export const getInactiveQuizList =  (): IRSAAction => ({
  [RSAA]: {
    endpoint: `${API_URL}/quiz/state/INACTIVE`,
    method: 'GET',
    types: [GET_INACTIVE_QUIZ_LIST_REQUEST, GET_INACTIVE_QUIZ_LIST_SUCCESS, GET_INACTIVE_QUIZ_LIST_FAILURE]
  }
});

export const getActiveQuizList =  (): IRSAAction => ({
  [RSAA]: {
    endpoint: `${API_URL}/quiz/state/ACTIVE`,
    method: 'GET',
    types: [GET_ACTIVE_QUIZ_LIST_REQUEST, GET_ACTIVE_QUIZ_LIST_SUCCESS, GET_ACTIVE_QUIZ_LIST_FAILURE]
  }
});

export const updateQuiz =  (quizId, quiz): IRSAAction => ({
  [RSAA]: {
    endpoint: `${API_URL}/quiz/${quizId}`,
    method: 'PUT',
    body: quiz,
    types: [UPDATE_QUIZ_REQUEST, UPDATE_QUIZ_SUCCESS, UPDATE_QUIZ_FAILURE]
  }
});
