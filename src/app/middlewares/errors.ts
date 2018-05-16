import {RSAA} from 'redux-api-middleware';
import {logout} from '../redux/auth/auth.actions';

export const errorsMiddleware = store => next => action => {

  console.log(action)
  if(action.error){
    console.log(action.payload);
    store.dispatch(logout());
  }
  return next(action);
};
