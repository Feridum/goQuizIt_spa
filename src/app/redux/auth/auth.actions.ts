import {Action} from 'redux';
import {LOGOUT} from './auth.action-types';


export const logout = (): Action => ({
  type: LOGOUT,
});
