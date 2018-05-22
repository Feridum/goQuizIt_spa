import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/ignoreElements';
import {CREATE_PLAYER_SUCCESS, FETCH_QUIZ_BY_TOKEN_SUCCESS} from './player.action-types';

@Injectable()
export class PlayerEpics {

  saveQuiz = (action$) => {
    return action$.ofType(FETCH_QUIZ_BY_TOKEN_SUCCESS)
      .map(action => {
        localStorage.setItem('player_quiz', JSON.stringify(action.payload));
      }).ignoreElements();
  }

  savePlayerQuestionAndAnswers = (action$) => {
    return action$.ofType(CREATE_PLAYER_SUCCESS)
      .map(action => {
        localStorage.setItem('player', JSON.stringify(action.payload.Player));
        localStorage.setItem('player_question', JSON.stringify(action.payload.Question));
        localStorage.setItem('player_answers', JSON.stringify(action.payload.Answers));
      }).ignoreElements();
  }
}
