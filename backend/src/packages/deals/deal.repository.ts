import { IRepository } from '~/libs/interfaces/repository.interface.js';
import { DealEntity, DealModel } from '~/packages/deals/deals.js';

class DealRepository implements Pick<IRepository, 'findAll'> {
  private readonly dealModel: typeof DealModel;

  public constructor(dealModel: typeof DealModel) {
    this.dealModel = dealModel;
  }

  async findAll(): Promise<DealEntity[]> {
    const deals = await this.dealModel
      .query()
      .select()
      .returning('*')
      .execute();

    return deals.map((deal) =>
      DealEntity.initialize({
        id: deal.id,
        name: deal.name,
        price: deal.price,
        ticketPrice: deal.ticketPrice,
        yieldPercentage: deal.yieldPercentage,
        daysRemaining: deal.daysRemaining,
        percentageSold: deal.percentageSold,
        imageLink: deal.imageLink,
      }),
    );
  }
}

export { DealRepository };
