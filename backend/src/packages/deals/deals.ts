import { DealModel } from './deal.model.js';
import { DealRepository } from './deal.repository.js';
import { DealService } from './deal.service.js';
import { DealController } from '~/packages/deals/deal.controller.js';
import { logger } from '~/libs/packages/logger/logger.js';

const dealRepository = new DealRepository(DealModel);
const dealService = new DealService(dealRepository);
const dealController = new DealController(logger, dealService);

export { DealModel } from './deal.model.js';
export { DealEntity } from './deal.entity.js';
export { DealRepository } from './deal.repository.js';
export { DealService } from './deal.service.js';
export { DealsApiPath } from './libs/enums/enums.js';
export {
  type DealGetAllItemResponseDto,
  type DealGetAllResponseDto,
} from './libs/types/types.js';
export { dealController };
