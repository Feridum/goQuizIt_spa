import {Injectable} from '@angular/core';
import {createEpicMiddleware} from 'redux-observable';
import {AuthEpics} from './auth/auth.epics';
import {PlayerEpics} from './player/player.epics';

@Injectable()
export class RootEpics {
  constructor(private authEpics: AuthEpics, private playerEpics: PlayerEpics) {
  }

  public createEpics() {
    return [
      createEpicMiddleware(this.authEpics.setAccessToken),
      createEpicMiddleware(this.authEpics.deleteAccessToken),
      createEpicMiddleware(this.playerEpics.saveQuiz),
      createEpicMiddleware(this.playerEpics.savePlayerQuestionAndAnswers),
      createEpicMiddleware(this.playerEpics.clearStorage),
      createEpicMiddleware(this.playerEpics.saveNewQuestion),
    ];
  }
}
