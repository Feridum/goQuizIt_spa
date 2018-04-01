import {Injectable} from '@angular/core';
import {FETCH_TOKEN_SUCCESS, LOGOUT} from './auth.action-types';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/ignoreElements';

@Injectable()
export class AuthEpics {

  setAccessToken = (action$) => {
    return action$.ofType(FETCH_TOKEN_SUCCESS)
      .map(action => {
      localStorage.setItem('access_token', action.payload.token);
    }).ignoreElements();
  }

  deleteAccessToken = (action$) => {
    return action$.ofType(LOGOUT)
      .map(action => {
        localStorage.removeItem('access_token');
      }).ignoreElements();
  }
}
