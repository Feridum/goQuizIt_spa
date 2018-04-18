import {IQuizState, IUnactiveQuiz} from './quiz.interface';
import {CREATE_QUIZ_SUCCESS, SET_QUIZ_ACTIVE_SUCCESS, UPDATE_QUIZ_SUCCESS} from './quiz.action-types';
import { omit } from 'lodash';

const mockData: { [id: string]: IUnactiveQuiz } = {
  1: {
    id: '1',
    name: 'foo1',
    status: 'unactive'
  },
  2: {
    id: '2',
    name:
      'foo2',
    status:
      'unactive'
  }
};

const initialState: IQuizState = {
  unactiveQuizList: mockData,
  activeQuizList: {},
  finishedQuizList: {},
};

export const quizReducer = (state: IQuizState = initialState, action) => {
  const behaviours = {
    [CREATE_QUIZ_SUCCESS]: (state, {payload}) => ({
      ...state,
      unactiveQuizList: {
        ...state.unactiveQuizList,
        [payload.id]: {
          ...payload,
          status: 'unactive'
        }
      }
    }),
    [UPDATE_QUIZ_SUCCESS]: (state, {payload}) => ({
      ...state,
      unactiveQuizList: {
        ...state.unactiveQuizList,
        [payload.id]: {...payload, status: 'unactive'}
      }
    }),
    [SET_QUIZ_ACTIVE_SUCCESS] : (state, {payload}) => ({
      ...state,
      activeQuizList: {
        ...state.activeQuizList,
        [payload.id] : {
          ...payload,
          status: 'active'
        }
      },
      unactiveQuizList : omit(state.unactiveQuizList, payload.id)
    })
  };

  const behaviour = behaviours[action.type];
  return behaviour ? behaviour(state, action) : state;
};
