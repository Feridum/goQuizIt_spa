import {IQuizState} from './quiz.interface';

const initialState: IQuizState = {
  unactiveQuizList: null
};

export const quizReducer = (state: IQuizState = initialState , action) => {
  const behaviours = {

  };

  const behaviour = behaviours[action.type];
  return behaviour ? behaviour(state, action) : state;
};
