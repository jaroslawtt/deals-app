import { AppEnvironment } from '~/libs/enums/enums.js';
import { type ValueOf } from '~/libs/types/types.js';

import { type IConfig } from './libs/interfaces/interfaces.js';
import { type EnvironmentSchema } from './libs/types/types.js';

class Config implements IConfig {
  public ENV: EnvironmentSchema;

  public constructor() {
    this.ENV = this.envSchema;
  }

  private get envSchema(): EnvironmentSchema {
    const environmentEnvValue = import.meta.env['VITE_APP_NODE_ENV'] as ValueOf<
      typeof AppEnvironment
    >;
    const appApiOriginUrl = import.meta.env[
      'VITE_APP_API_ORIGIN_URL'
    ] as string;
    const urlEnvValue =
      environmentEnvValue === AppEnvironment.PRODUCTION
        ? ((import.meta.env['VITE_APP_SERVER_URL'] + appApiOriginUrl) as string)
        : appApiOriginUrl;

    return {
      APP: {
        ENVIRONMENT: environmentEnvValue,
      },
      API: {
        ORIGIN_URL: urlEnvValue,
      },
    };
  }
}

export { Config };
