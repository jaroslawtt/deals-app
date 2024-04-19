import { type IConfig as ILibraryConfig } from 'shared/build/index.js';

import { type EncryptConfig, type EnvironmentSchema, type AuthConfig } from '../types/types.js';

interface IConfig extends ILibraryConfig<EnvironmentSchema> {
  ENCRYPTION: EncryptConfig;
  AUTH: AuthConfig;
}

export { type IConfig };
