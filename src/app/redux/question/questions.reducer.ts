import {IQuestion, IQuestionsState} from './questions.interface';
import {CREATE_QUESTION_SUCCESS, UPDATE_QUESTION_SUCCESS} from './questions.action-types';

const mockData: { [id: string]: IQuestion[] } = {
  1: [
    {
      id: '1',
      question: 'Pytanie 1',
      answers: [
        {
          id: '1',
          name: 'aaa',
          isCorrect: false
        }
      ]
    }
  ],
  2: [{
    id: '1',
    question: 'Pytanie 2',
    answers: [
      {
        id: '1',
        name: 'aaa',
        isCorrect: false
      }
    ]
  }]
};

const initialState: IQuestionsState = {
  questions: mockData
};

export const questionsReducer = (state: IQuestionsState = initialState, action) => {
  const behaviours = {
    [CREATE_QUESTION_SUCCESS]: (state, {payload, meta}) => ({
      questions: {
        ...state.questions,
        [meta.quizId]: [
          ...state.questions[meta.quizId],
          payload,
        ]
      }
    }),
    [UPDATE_QUESTION_SUCCESS]: (state, {payload, meta}) => ({
      questions: {
        ...state.questions,
        [meta.quizId]: state.questions[meta.quizId].map((e) => e.id === payload.id ? payload :  e)
      }
    })
  };

  const behaviour = behaviours[action.type];
  return behaviour ? behaviour(state, action) : state;
};
