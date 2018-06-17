import {IQuizState} from './quiz.interface';
import {
  CREATE_QUIZ_SUCCESS,
  GET_ACTIVE_QUIZ_LIST_SUCCESS,
  GET_FINISHED_QUIZ_LIST_SUCCESS,
  GET_INACTIVE_QUIZ_LIST_SUCCESS,
  GET_QUIZ_RESULTS_SUCCESS,
  SET_QUIZ_ACTIVE_SUCCESS,
  SET_QUIZ_FINISHED_SUCCESS,
  UPDATE_QUIZ_SUCCESS
} from './quiz.action-types';
import {omit} from 'lodash';
import {LOGOUT} from '../auth/auth.action-types';

const initialState: IQuizState = {
  inactiveQuizList: null,
  activeQuizList: null,
  finishedQuizList: null,
  results: null
};

export const quizReducer = (state: IQuizState = initialState, action) => {
  const behaviours = {
    [GET_INACTIVE_QUIZ_LIST_SUCCESS]: (state, {payload}) => ({
      ...state,
      inactiveQuizList: payload.reduce(function (map, obj) {
        map[obj.id] = obj;
        return map;
      }, {})
    }),
    [GET_ACTIVE_QUIZ_LIST_SUCCESS]: (state, {payload}) => ({
      ...state,
      activeQuizList: payload.reduce(function (map, obj) {
        map[obj.id] = obj;
        return map;
      }, {})
    }),
    [GET_FINISHED_QUIZ_LIST_SUCCESS]: (state, {payload}) => ({
      ...state,
      finishedQuizList: payload.reduce(function (map, obj) {
        map[obj.id] = obj;
        return map;
      }, {})
    }),
    [CREATE_QUIZ_SUCCESS]: (state, {payload}) => ({
      ...state,
      inactiveQuizList: {
        ...state.inactiveQuizList,
        [payload.id]: {
          ...payload,
          status: 'INACTIVE'
        }
      }
    }),
    [UPDATE_QUIZ_SUCCESS]: (state, {payload}) => ({
      ...state,
      inactiveQuizList: {
        ...state.inactiveQuizList,
        [payload.id]: payload
      }
    }),
    [SET_QUIZ_ACTIVE_SUCCESS]: (state, {payload}) => ({
      ...state,
      activeQuizList: {
        ...state.activeQuizList,
        [payload.id]: {
          ...payload,
        }
      },
      inactiveQuizList: omit(state.inactiveQuizList, payload.id)
    }),
    [SET_QUIZ_FINISHED_SUCCESS]: (state, {payload}) => ({
      ...state,
      finishedQuizList: {
        ...state.finishedQuizList,
        [payload.id]: {
          ...payload,
        }
      },
      activeQuizList: omit(state.activeQuizList, payload.id)
    }),
    [GET_QUIZ_RESULTS_SUCCESS]: (state, {payload, meta}) => ({
      ...state,
      results: {
        ...(state.results || []),
        [meta.quizId]: payload
      }
    }),
    [LOGOUT]: (state, {payload}) => ({
      ...state,
      inactiveQuizList: null
    })
  };

  const behaviour = behaviours[action.type];
  return behaviour ? behaviour(state, action) : state;
};
