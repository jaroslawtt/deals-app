import {
  AbstractModel,
  DatabaseTableName,
} from '~/libs/packages/database/database.js';

class DealModel extends AbstractModel {
  public 'id': number;

  public 'name': string;

  public 'price': number;

  public 'ticketPrice': number;

  public 'yieldPercentage': number;

  public 'daysRemaining': number;

  public 'percentageSold': number;

  public 'imageLink': string;

  public static override get tableName(): string {
    return DatabaseTableName.DEALS;
  }
}

export { DealModel };
