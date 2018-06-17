import {RSAA} from 'redux-api-middleware';
import {
  CREATE_QUIZ_FAILURE,
  CREATE_QUIZ_REQUEST,
  CREATE_QUIZ_SUCCESS,
  DELETE_QUIZ_FAILURE,
  DELETE_QUIZ_REQUEST,
  DELETE_QUIZ_SUCCESS,
  FETCH_PLAYERS_LIST_FAILURE,
  FETCH_PLAYERS_LIST_REQUEST,
  FETCH_PLAYERS_LIST_SUCCESS,
  GET_ACTIVE_QUIZ_LIST_FAILURE,
  GET_ACTIVE_QUIZ_LIST_REQUEST,
  GET_ACTIVE_QUIZ_LIST_SUCCESS,
  GET_FINISHED_QUIZ_LIST_FAILURE,
  GET_FINISHED_QUIZ_LIST_REQUEST,
  GET_FINISHED_QUIZ_LIST_SUCCESS,
  GET_INACTIVE_QUIZ_LIST_FAILURE,
  GET_INACTIVE_QUIZ_LIST_REQUEST,
  GET_INACTIVE_QUIZ_LIST_SUCCESS,
  GET_QUIZ_RESULTS_FAILURE,
  GET_QUIZ_RESULTS_REQUEST,
  GET_QUIZ_RESULTS_SUCCESS,
  SET_QUIZ_ACTIVE_FAILURE,
  SET_QUIZ_ACTIVE_REQUEST,
  SET_QUIZ_ACTIVE_SUCCESS,
  SET_QUIZ_FINISHED_FAILURE,
  SET_QUIZ_FINISHED_REQUEST,
  SET_QUIZ_FINISHED_SUCCESS,
  UPDATE_QUIZ_FAILURE,
  UPDATE_QUIZ_REQUEST,
  UPDATE_QUIZ_SUCCESS
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
};

export const setQuizActive = (quizId): IRSAAction => {
  return {
    [RSAA]: {
      endpoint: `${API_URL}/quiz/${quizId}/patch/ACTIVE`,
      method: 'PUT',
      types: [SET_QUIZ_ACTIVE_REQUEST, SET_QUIZ_ACTIVE_SUCCESS, SET_QUIZ_ACTIVE_FAILURE]
    }
  };
};

export const setQuizFinished = (quizId): IRSAAction => {
  return {
    [RSAA]: {
      endpoint: `${API_URL}/quiz/${quizId}/patch/FINISHED`,
      method: 'PUT',
      types: [SET_QUIZ_FINISHED_REQUEST, SET_QUIZ_FINISHED_SUCCESS, SET_QUIZ_FINISHED_FAILURE]
    }
  };
};

export const getInactiveQuizList = (): IRSAAction => ({
  [RSAA]: {
    endpoint: `${API_URL}/quiz/state/INACTIVE`,
    method: 'GET',
    types: [GET_INACTIVE_QUIZ_LIST_REQUEST, GET_INACTIVE_QUIZ_LIST_SUCCESS, GET_INACTIVE_QUIZ_LIST_FAILURE]
  }
});

export const getActiveQuizList = (): IRSAAction => ({
  [RSAA]: {
    endpoint: `${API_URL}/quiz/state/ACTIVE`,
    method: 'GET',
    types: [GET_ACTIVE_QUIZ_LIST_REQUEST, GET_ACTIVE_QUIZ_LIST_SUCCESS, GET_ACTIVE_QUIZ_LIST_FAILURE]
  }
});

export const getFinishedQuizList = (): IRSAAction => ({
  [RSAA]: {
    endpoint: `${API_URL}/quiz/state/FINISHED`,
    method: 'GET',
    types: [GET_FINISHED_QUIZ_LIST_REQUEST, GET_FINISHED_QUIZ_LIST_SUCCESS, GET_FINISHED_QUIZ_LIST_FAILURE]
  }
});

export const updateQuiz = (quizId, quiz): IRSAAction => ({
  [RSAA]: {
    endpoint: `${API_URL}/quiz/${quizId}`,
    method: 'PUT',
    body: quiz,
    types: [UPDATE_QUIZ_REQUEST, UPDATE_QUIZ_SUCCESS, UPDATE_QUIZ_FAILURE]
  }
});

export const getPlayers = (quizId): IRSAAction => ({
  [RSAA]: {
    method: 'GET',
    endpoint: `${API_URL}/quiz/${quizId}/players`,
    types: [
      FETCH_PLAYERS_LIST_REQUEST,
      {
        type: FETCH_PLAYERS_LIST_SUCCESS,
        meta: {quizId}
      },
      FETCH_PLAYERS_LIST_FAILURE]
  }
});

export const getQuizResult = (quizId): IRSAAction => ({
  [RSAA]: {
    method: 'GET',
    endpoint: `${API_URL}/quiz/${quizId}/summary`,
    types: [
      GET_QUIZ_RESULTS_REQUEST,
      {
        type: GET_QUIZ_RESULTS_SUCCESS,
        meta: {quizId}
      },
      GET_QUIZ_RESULTS_FAILURE]
  }
});

export const deleteQuiz = (quizId): IRSAAction => ({
  [RSAA]: {
    method: 'DELETE',
    endpoint: `${API_URL}/quiz/${quizId}`,
    types: [
      DELETE_QUIZ_REQUEST,
      {
        type: DELETE_QUIZ_SUCCESS,
        meta: {quizId}
      },
      DELETE_QUIZ_FAILURE]
  }
});
