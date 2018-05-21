import {IPlayerState} from './player.interface';
import {CREATE_PLAYER_SUCCESS, FETCH_QUIZ_BY_TOKEN_SUCCESS} from './player.action-types';

const initialState: IPlayerState = {
  quiz: JSON.parse(localStorage.getItem('player_quiz')),
  playerId: JSON.parse(localStorage.getItem('player')),
  question: JSON.parse(localStorage.getItem('player_question')),
  answers: JSON.parse(localStorage.getItem('player_answers')),
};

export const playerReducer = (state: IPlayerState = initialState, action) => {
  const behaviours = {
    [FETCH_QUIZ_BY_TOKEN_SUCCESS]: (state, {payload}) => ({
      ...state,
      quiz: payload
    }),
    [CREATE_PLAYER_SUCCESS]: (state, {payload}) => ({
      ...state,
      playerId: payload.Player,
      question: payload.Question,
      answers: payload.Answers
    })
  };

  const behaviour = behaviours[action.type];
  return behaviour ? behaviour(state, action) : state;
};
