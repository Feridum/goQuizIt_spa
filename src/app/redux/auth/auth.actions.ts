import {Action} from 'redux';
import {FETCH_TOKEN_FAILURE, FETCH_TOKEN_REQUEST, FETCH_TOKEN_SUCCESS, LOGOUT} from './auth.action-types';
import {RSAA} from 'redux-api-middleware';
import {IRSAAction} from '../state.interface';
import {APP_URL} from '../../constants';

export const fetchToken = (username: String, password: String): IRSAAction => ({
  [RSAA]: {
    method: 'POST',
    types: [FETCH_TOKEN_REQUEST, FETCH_TOKEN_SUCCESS, FETCH_TOKEN_FAILURE],
    endpoint: `${APP_URL}/login`,
    body: {
      username, password
    }
  }
});

export const logout = (): Action => ({
  type: LOGOUT,
});
