import {
  type AnyAction,
  type MiddlewareArray,
  type ThunkMiddleware,
} from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import { AppEnvironment } from '~/libs/enums/enums.js';
import { type IConfig } from '~/libs/packages/config/config.js';

import { handleError } from './middlewares/middlewares.js';

import { storage } from '~/libs/packages/storage/storage.js';
import { authApi } from '~/packages/auth/auth.js';
import { dealsApi } from '~/packages/deals/deals.js';

import { notification } from '~/libs/packages/notification/notification.js';
import { reducer as authReducer } from '~/slices/auth/auth.js';
import { reducer as appReducer } from '~/slices/app/app.js';
import { reducer as dealsReducer } from '~/slices/deals/deals.js';

type RootReducer = {
  auth: ReturnType<typeof authReducer>;
  app: ReturnType<typeof appReducer>;
  deals: ReturnType<typeof dealsReducer>;
};

type ExtraArguments = {
  authApi: typeof authApi;
  dealsApi: typeof dealsApi;
  storage: typeof storage;
  notification: typeof notification;
};

class Store {
  public instance: ReturnType<
    typeof configureStore<
      RootReducer,
      AnyAction,
      MiddlewareArray<[ThunkMiddleware<RootReducer, AnyAction, ExtraArguments>]>
    >
  >;

  public constructor(config: IConfig) {
    this.instance = configureStore({
      devTools: config.ENV.APP.ENVIRONMENT !== AppEnvironment.PRODUCTION,
      reducer: {
        auth: authReducer,
        app: appReducer,
        deals: dealsReducer,
      },
      middleware: (getDefaultMiddleware) => {
        return [
          handleError,
          ...getDefaultMiddleware({
            thunk: {
              extraArgument: this.extraArguments,
            },
          }),
        ];
      },
    });
  }

  public get extraArguments(): ExtraArguments {
    return {
      authApi,
      dealsApi,
      storage,
      notification,
    };
  }
}

export { type ExtraArguments, Store };
