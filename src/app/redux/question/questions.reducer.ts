import {IQuestion, IQuestionsState} from './questions.interface';
import {CREATE_QUESTION_SUCCESS, FETCH_QUESTIONS_LIST_SUCCESS, UPDATE_QUESTION_SUCCESS} from './questions.action-types';

const initialState: IQuestionsState = {
  questions: null
};

export const questionsReducer = (state: IQuestionsState = initialState, action) => {
  const behaviours = {
    [FETCH_QUESTIONS_LIST_SUCCESS]: (state, {payload, meta}) => ({
        questions: {
          ...(state.questions || [] ) ,
          [meta.quizId] : [
            ...(state.questions && state.questions[meta.quizId] || []),
            ...payload,
          ]
        }
    }),
    [CREATE_QUESTION_SUCCESS]: (state, {payload, meta}) => ({
      questions: {
        ...state.questions,
        [meta.quizId]: [
          ...(state.questions[meta.quizId] || []),
          payload,
        ]
      }
    }),
    [UPDATE_QUESTION_SUCCESS]: (state, {payload, meta}) => ({
      questions: {
        ...state.questions,
        [meta.quizId]: state.questions[meta.quizId].map((e: IQuestion) => e.question.questionId === payload.question.questionId ? payload :  e)
      }
    })
  };

  const behaviour = behaviours[action.type];
  return behaviour ? behaviour(state, action) : state;
};
