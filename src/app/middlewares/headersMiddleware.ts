import {RSAA} from 'redux-api-middleware';

export const headersMiddleware = store => next => action => {

  if (action.hasOwnProperty(RSAA)) {
    console.log(action)
    const newAction = {
      [RSAA] : {
        ...action[RSAA],
      headers: {
        // 'Access-Control-Allow-Headers': 'access-control-allow-origin',
        // 'Access-Control-Allow-Origin': '*',
         'Content-Type': 'application/json',
        }
      }
    };
    return next(newAction);
  }
  return next(action);
};
