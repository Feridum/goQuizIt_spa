import { Injectable } from '@angular/core';
import {createEpicMiddleware} from 'redux-observable';
import {AuthEpics} from './auth/auth.epics';

@Injectable()
export class RootEpics {
  constructor(private authEpics: AuthEpics) {}

  public createEpics() {
    return [
      createEpicMiddleware(this.authEpics.setAccessToken),
      createEpicMiddleware(this.authEpics.deleteAccessToken)
    ];
  }
}
