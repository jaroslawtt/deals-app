import convict, { type Config as TConfig } from 'convict';
import { config } from 'dotenv';

import { AppEnvironment } from '~/libs/enums/enums.js';
import { type ILogger } from '~/libs/packages/logger/logger.js';

import { type IConfig } from './libs/interfaces/interfaces.js';
import {
  type EnvironmentSchema,
  type EncryptConfig,
  type AuthConfig,
} from './libs/types/types.js';

class Config implements IConfig {
  private logger: ILogger;

  public AUTH: AuthConfig;

  public ENV: EnvironmentSchema;

  public ENCRYPTION: EncryptConfig;

  public constructor(logger: ILogger) {
    this.logger = logger;

    config();

    this.envSchema.load({});
    this.envSchema.validate({
      allowed: 'strict',
      output: (message) => this.logger.info(message),
    });

    this.ENV = this.envSchema.getProperties();
    this.logger.info('.env file found and successfully parsed!');

    this.AUTH = this.authConfig;
    this.ENCRYPTION = this.encryptionConfig;
  }

  private get envSchema(): TConfig<EnvironmentSchema> {
    return convict<EnvironmentSchema>({
      APP: {
        ENVIRONMENT: {
          doc: 'Application environment',
          format: Object.values(AppEnvironment),
          env: 'NODE_ENV',
          default: null,
        },
        PORT: {
          doc: 'Port for incoming connections',
          format: Number,
          env: 'PORT',
          default: null,
        },
        HOST: {
          doc: 'Host for connection',
          format: String,
          env: 'HOST',
          default: null,
        },
      },
      DB: {
        CONNECTION_STRING: {
          doc: 'Database connection string',
          format: String,
          env: 'DB_CONNECTION_STRING',
          default: null,
        },
        DIALECT: {
          doc: 'Database dialect',
          format: String,
          env: 'DB_DIALECT',
          default: null,
        },
        POOL_MIN: {
          doc: 'Database pool min count',
          format: Number,
          env: 'DB_POOL_MIN',
          default: null,
        },
        POOL_MAX: {
          doc: 'Database pool max count',
          format: Number,
          env: 'DB_POOL_MAX',
          default: null,
        },
      },
      JWT: {
        SECRET_KEY: {
          doc: 'Secret key for token generation',
          format: String,
          env: 'SECRET_KEY',
          default: null,
        },
      },
    });
  }

  private get encryptionConfig(): EncryptConfig {
    return {
      USER_PASSWORD_SALT_ROUNDS: 10,
    };
  }

  private get authConfig(): AuthConfig {
    return {
      ALGORITHM: 'HS256',
      EXP_TIME: '24h',
    };
  }
}

export { Config };
