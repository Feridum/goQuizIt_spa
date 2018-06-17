import {RSAA} from 'redux-api-middleware';
import {API_URL} from '../../constants';
import {
  CREATE_QUESTION_FAILURE,
  CREATE_QUESTION_REQUEST,
  CREATE_QUESTION_SUCCESS,
  DELETE_QUESTION_FAILURE,
  DELETE_QUESTION_REQUEST,
  DELETE_QUESTION_SUCCESS,
  FETCH_QUESTIONS_LIST_FAILURE,
  FETCH_QUESTIONS_LIST_REQUEST,
  FETCH_QUESTIONS_LIST_SUCCESS,
  UPDATE_QUESTION_FAILURE,
  UPDATE_QUESTION_REQUEST,
  UPDATE_QUESTION_SUCCESS
} from './questions.action-types';
import {IRSAAction} from '../state.interface';

export const getQuestions = (quizId): IRSAAction => ({
  [RSAA]: {
    method: 'GET',
    endpoint: `${API_URL}/quiz/${quizId}/questionWithAnswers`,
    types: [
      FETCH_QUESTIONS_LIST_REQUEST,
      {
        type: FETCH_QUESTIONS_LIST_SUCCESS,
        meta: {quizId}
      },
      FETCH_QUESTIONS_LIST_FAILURE]
  }
});

export const createQuestion = (quizId, question): IRSAAction => ({
  [RSAA]: {
    endpoint: `${API_URL}/quiz/${quizId}/questionWithAnswers`,
    method: 'POST',
    body: question,
    types: [
      CREATE_QUESTION_REQUEST,
      {
        type: CREATE_QUESTION_SUCCESS,
        meta: {quizId: quizId},
      },
      CREATE_QUESTION_FAILURE]
  }
});


export const updateQuestion = (quizId, questionId, question): IRSAAction => ({
  [RSAA]: {
    endpoint: `${API_URL}/quiz/${questionId}/questionWithAnswers`,
    method: 'PUT',
    body: question,
    types: [
      UPDATE_QUESTION_REQUEST,
      {
        type: UPDATE_QUESTION_SUCCESS,
        meta: {quizId},
      },
      UPDATE_QUESTION_FAILURE
    ]
  }
});

export const deleteQuestion = (quizId, questionId): IRSAAction => ({
  [RSAA]: {
    endpoint: `${API_URL}/question/${questionId}`,
    method: 'DELETE',
    types: [
      DELETE_QUESTION_REQUEST,
      {
        type: DELETE_QUESTION_SUCCESS,
        meta: {quizId},
      },
      DELETE_QUESTION_FAILURE
    ]
  }
});
