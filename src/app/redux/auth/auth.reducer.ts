import {IAuthState} from './auth.interface';
import {FETCH_TOKEN_SUCCESS, LOGOUT} from './auth.action-types';

const initialState: IAuthState = {
  token: localStorage.getItem('access_token'),
};

export const authReducer = (state: IAuthState = initialState, action) => {
  const behaviours = {
    [FETCH_TOKEN_SUCCESS]: (state, {payload}) => ({
      ...state,
      token: payload && payload.access_token,
      isAuthenticated: true,
    }),
    [LOGOUT]: () => ({
      ...state,
      token: null
    })
  };

  const behaviour = behaviours[action.type];
  return behaviour ? behaviour(state, action) : state;
};
