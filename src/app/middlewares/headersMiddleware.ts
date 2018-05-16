import {RSAA} from 'redux-api-middleware';

export const headersMiddleware = store => next => action => {
  const state = store.getState();
  if (action.hasOwnProperty(RSAA)) {

    const newAction = {
      [RSAA] : {
        ...action[RSAA],
        body: JSON.stringify(action[RSAA].body),
      headers: {
        // 'Access-Control-Allow-Headers': 'access-control-allow-origin',
        // 'Access-Control-Allow-Origin': '*',
         'Content-Type': 'application/json',
          'Authorization' : `Bearer ${state.auth.token}`,
        }
      }
    };
    return next(newAction);
  }
  return next(action);
};
