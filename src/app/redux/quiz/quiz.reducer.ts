import {IQuizState, IUnactiveQuiz} from './quiz.interface';
import {
  CREATE_QUIZ_SUCCESS, GET_ACTIVE_QUIZ_LIST_SUCCESS, GET_INACTIVE_QUIZ_LIST_SUCCESS, SET_QUIZ_ACTIVE_SUCCESS,
  UPDATE_QUIZ_SUCCESS
} from './quiz.action-types';
import { omit } from 'lodash';
import {LOGOUT} from '../auth/auth.action-types';
const initialState: IQuizState = {
  inactiveQuizList: null,
  activeQuizList: null,
  finishedQuizList: null,
};

export const quizReducer = (state: IQuizState = initialState, action) => {
  const behaviours = {
    [GET_INACTIVE_QUIZ_LIST_SUCCESS]: (state, {payload}) => ({
      ...state,
      inactiveQuizList: payload.reduce(function(map, obj) {
        map[obj.id] = obj;
        return map;
      }, {})
    }),
    [GET_ACTIVE_QUIZ_LIST_SUCCESS]: (state, {payload}) => ({
      ...state,
      activeQuizList: payload.reduce(function(map, obj) {
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
    [SET_QUIZ_ACTIVE_SUCCESS] : (state, {payload}) => ({
      ...state,
      activeQuizList: {
        ...state.activeQuizList,
        [payload.id] : {
          ...payload,
        }
      },
      inactiveQuizList : omit(state.inactiveQuizList, payload.id)
    }),
    [LOGOUT]: (state, {payload}) => ({
      ...state,
      inactiveQuizList: null
    })
  };

  const behaviour = behaviours[action.type];
  return behaviour ? behaviour(state, action) : state;
};
