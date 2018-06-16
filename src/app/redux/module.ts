import {NgModule} from '@angular/core';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {NgReduxRouter, NgReduxRouterModule} from '@angular-redux/router';
import {provideReduxForms} from '@angular-redux/form';
import {createLogger} from 'redux-logger';
import {IAppState} from './state.interface';
import {rootReducer} from './reducers';
import {RootEpics} from './epics';
import {apiMiddleware} from 'redux-api-middleware';
import {AuthEpics} from './auth/auth.epics';
import {headersMiddleware} from '../middlewares/headersMiddleware';
import {errorsMiddleware} from '../middlewares/errors';
import {PlayerEpics} from './player/player.epics';

@NgModule({
  imports: [NgReduxModule, NgReduxRouterModule.forRoot()],
  providers: [RootEpics, AuthEpics, PlayerEpics],
})
export class StoreModule {
  constructor(
    public store: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter,
    rootEpics: RootEpics,
  ) {
    store.configureStore(
      rootReducer,
      undefined,
      [
        headersMiddleware,
        apiMiddleware,
        errorsMiddleware,
        createLogger(),
        ...rootEpics.createEpics()
      ],
      devTools.isEnabled() ? [devTools.enhancer()] : []);

    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }

    provideReduxForms(store);
  }
}
