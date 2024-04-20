import {
  ApiHandlerResponse,
  Controller,
} from '~/libs/packages/controller/controller.js';
import { DealsApiPath, DealService } from '~/packages/deals/deals.js';
import { ILogger } from '~/libs/packages/logger/libs/interfaces/logger.interface.js';
import { ApiPath } from '~/libs/enums/enums.js';
import { HttpCode } from '~/libs/packages/http/http.js';

class DealController extends Controller {
  private readonly dealService: DealService;

  public constructor(logger: ILogger, dealService: DealService) {
    super(logger, ApiPath.DEALS);

    this.dealService = dealService;

    this.addRoute({
      path: DealsApiPath.ROOT,
      method: 'GET',
      handler: () => this.getAll(),
    });
  }

  private async getAll(): Promise<ApiHandlerResponse> {
    return {
      status: HttpCode.OK,
      payload: await this.dealService.findAll(),
    };
  }
}

export { DealController };
