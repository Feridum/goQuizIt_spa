import {IRSAAction} from '../state.interface';
import {RSAA} from 'redux-api-middleware';
import {API_URL} from '../../constants';
import {
  CREATE_PLAYER_FAILURE,
  CREATE_PLAYER_REQUEST, CREATE_PLAYER_SUCCESS, FETCH_QUIZ_BY_TOKEN_FAILURE, FETCH_QUIZ_BY_TOKEN_REQUEST,
  FETCH_QUIZ_BY_TOKEN_SUCCESS
} from './player.action-types';
import {
  CREATE_QUIZ_FAILURE,
  CREATE_QUIZ_REQUEST, CREATE_QUIZ_SUCCESS, GET_INACTIVE_QUIZ_LIST_FAILURE, GET_INACTIVE_QUIZ_LIST_REQUEST,
  GET_INACTIVE_QUIZ_LIST_SUCCESS
} from '../quiz/quiz.action-types';


export const fetchQuizByToken = (token): IRSAAction => {
  return {
    [RSAA]: {
      endpoint: `${API_URL}/quiz/token/${token}`,
      method: 'GET',
      types: [FETCH_QUIZ_BY_TOKEN_REQUEST, FETCH_QUIZ_BY_TOKEN_SUCCESS, FETCH_QUIZ_BY_TOKEN_FAILURE]
    }
  };
};


export const addPlayer = (quizId, player): IRSAAction => {
  return {
    [RSAA]: {
      endpoint: `${API_URL}/players/quiz/${quizId}`,
      method: 'POST',
      body: player,
      types: [CREATE_PLAYER_REQUEST, CREATE_PLAYER_SUCCESS, CREATE_PLAYER_FAILURE]
    }
  };
}
