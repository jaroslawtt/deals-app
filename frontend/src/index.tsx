import '~/assets/css/styles.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {
  App,
  RouterProvider,
  StoreProvider,
  Notification,
} from '~/libs/components/components.js';
import { AppRoute } from '~/libs/enums/enums.js';
import { store } from '~/libs/packages/store/store.js';
import { AuthPage } from '~/pages/auth/auth.js';
import { MainPage } from '~/pages/main/main.js';

createRoot(document.querySelector('#root') as HTMLElement).render(
  <StrictMode>
    <StoreProvider store={store.instance}>
      <RouterProvider
        routes={[
          {
            path: AppRoute.ROOT,
            element: <App />,
            children: [
              {
                path: AppRoute.ROOT,
                element: <MainPage />,
              },
              {
                path: AppRoute.SIGN_IN,
                element: <AuthPage />,
              },
              {
                path: AppRoute.SIGN_UP,
                element: <AuthPage />,
              },
            ],
          },
        ]}
      />
    </StoreProvider>
    <Notification />
  </StrictMode>,
);
