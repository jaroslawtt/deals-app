import { config } from '~/libs/packages/config/config.js';
import { storage } from '~/libs/packages/storage/storage.js';
import { http } from '~/libs/packages/http/http.js';
import { DealsApi } from '~/packages/deals/deals-api.js';

const dealsApi = new DealsApi({
  baseUrl: config.ENV.API.ORIGIN_URL,
  storage,
  http,
});

export { DealsApiPath } from './libs/enums/enums.js';
export {
  type DealGetAllItemResponseDto,
  type DealGetAllResponseDto,
} from './libs/types/types.js';

export { dealsApi };
