import { config } from '~/libs/packages/config/config.js';
import { database } from '~/libs/packages/database/database.js';
import { logger } from '~/libs/packages/logger/logger.js';
import { ServerApp } from './server-app.js';
import { ServerAppApi } from './server-app-api.js';
import { authController } from '~/packages/auth/auth.js';
import { dealController } from '~/packages/deals/deals.js';

const apiV1 = new ServerAppApi(
  'v1',
  config,
  ...authController.routes,
  ...dealController.routes,
);
const serverApp = new ServerApp({
  config,
  logger,
  database,
  apis: [apiV1],
});

export { serverApp };
export { type ServerAppRouteParameters } from './libs/types/types.js';
