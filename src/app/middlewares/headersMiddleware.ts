import {RSAA} from 'redux-api-middleware';

export const headersMiddleware = store => next => action => {
  const state = store.getState();
  if (action.hasOwnProperty(RSAA)) {

    const headers = {
      // 'Access-Control-Allow-Headers': 'access-control-allow-origin',
      // 'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };

    if (state.auth.token !== null) {
      headers['Authorization'] = `Bearer ${state.auth.token}`;
    }

    const newAction = {
      [RSAA]: {
        ...action[RSAA],
        body: JSON.stringify(action[RSAA].body),
        headers: headers
      }
    };
    return next(newAction);
  }
  return next(action);
};
