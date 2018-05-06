import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { provideReduxForms } from '@angular-redux/form';

import { createLogger } from 'redux-logger';

import { IAppState } from './state.interface';
import { rootReducer } from './reducers';
import { RootEpics } from './epics';
import { apiMiddleware } from 'redux-api-middleware';
import {AuthEpics} from './auth/auth.epics';
import {headersMiddleware} from '../middlewares/headersMiddleware';

@NgModule({
  imports: [NgReduxModule, NgReduxRouterModule.forRoot()],
  providers: [RootEpics, AuthEpics],
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
        createLogger(), ...rootEpics.createEpics()
      ],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);

    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }

    provideReduxForms(store);
  }
}
