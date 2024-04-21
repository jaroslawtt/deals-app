import { IService } from '~/libs/interfaces/service.interface.js';
import {
  type DealGetAllResponseDto,
  DealRepository,
} from '~/packages/deals/deals.js';

class DealService implements Pick<IService, 'findAll'> {
  private readonly dealRepository: DealRepository;

  public constructor(dealRepository: DealRepository) {
    this.dealRepository = dealRepository;
  }

  async findAll(): Promise<DealGetAllResponseDto> {
    const deals = await this.dealRepository.findAll();

    return {
      items: deals.map((deal) => deal.toObject()),
    };
  }
}

export { DealService };
