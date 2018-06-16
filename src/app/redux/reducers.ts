import {combineReducers} from 'redux';
import {composeReducers, defaultFormReducer} from '@angular-redux/form';
import {routerReducer} from '@angular-redux/router';
import {quizReducer} from './quiz/quiz.reducer';
import {authReducer} from './auth/auth.reducer';
import {questionsReducer} from './question/questions.reducer';
import {playerReducer} from './player/player.reducers';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    router: routerReducer,
    quiz: quizReducer,
    auth: authReducer,
    player: playerReducer,
    questions: questionsReducer
  }));
