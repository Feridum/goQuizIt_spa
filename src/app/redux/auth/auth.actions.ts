import {Action} from 'redux';
import {
  CREATE_ACCOUNT_FAILURE,
  CREATE_ACCOUNT_REQUEST, CREATE_ACCOUNT_SUCCESS, FETCH_TOKEN_FAILURE, FETCH_TOKEN_REQUEST, FETCH_TOKEN_SUCCESS, FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOGOUT, RESET_PASSWORD_FAILURE, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS
} from './auth.action-types';
import {RSAA} from 'redux-api-middleware';
import {IRSAAction} from '../state.interface';
import {API_URL, APP_URL} from '../../constants';

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

export const createAccount = (body): IRSAAction =>({
  [RSAA]: {
    method: 'POST',
    types: [CREATE_ACCOUNT_REQUEST, CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_FAILURE],
    endpoint: `${API_URL}/register`,
    body: {...body}
  }
})

export const forgotPassword = (email): IRSAAction =>({
  [RSAA]: {
    method: 'POST',
    types: [FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE],
    endpoint: `${API_URL}/forgot-password`,
    body: {email}
  }
})

export const resetPassword = (password, token): IRSAAction =>({
  [RSAA]: {
    method: 'POST',
    types: [RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE],
    endpoint: `${API_URL}/reset-password?token=${token}`,
    body: {password}
  }
})

export const logout = (): Action => ({
  type: LOGOUT,
});
