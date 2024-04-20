import { Knex } from 'knex';
import { DatabaseTableName } from '~/libs/packages/database/database.js';

const ColumnName = {
  ID: 'id',
  NAME: 'name',
  PRICE: 'price',
  TICKET_PRICE: 'ticket_price',
  YIELD_PERCENTAGE: 'yield_percentage',
  DAYS_REMAINING: 'days_remaining',
  PERCENTAGE_SOLD: 'percentage_sold',
  IMAGE_LINK: 'image_link',
};

export async function seed(knex: Knex): Promise<void> {
  await knex(DatabaseTableName.DEALS).del();

  await knex(DatabaseTableName.DEALS).insert([
    {
      id: 1,
      [ColumnName.NAME]: 'The Marina Torch',
      [ColumnName.PRICE]: 6500000,
      [ColumnName.TICKET_PRICE]: 60000,
      [ColumnName.YIELD_PERCENTAGE]: 9.25,
      [ColumnName.DAYS_REMAINING]: 150,
      [ColumnName.PERCENTAGE_SOLD]: 75,
      [ColumnName.IMAGE_LINK]:
        'https://bulka.s3.eu-west-3.amazonaws.com/marina-torch.png',
    },
    {
      id: 2,
      [ColumnName.NAME]: 'HHHR Tower',
      [ColumnName.PRICE]: 6500000,
      [ColumnName.TICKET_PRICE]: 60000,
      [ColumnName.YIELD_PERCENTAGE]: 9.25,
      [ColumnName.DAYS_REMAINING]: 150,
      [ColumnName.PERCENTAGE_SOLD]: 75,
      [ColumnName.IMAGE_LINK]:
        'https://bulka.s3.eu-west-3.amazonaws.com/hhhr-tower.png',
    },
    {
      id: 3,
      [ColumnName.NAME]: 'Ocean peaks',
      [ColumnName.PRICE]: 6500000,
      [ColumnName.TICKET_PRICE]: 60000,
      [ColumnName.YIELD_PERCENTAGE]: 9.25,
      [ColumnName.DAYS_REMAINING]: 150,
      [ColumnName.PERCENTAGE_SOLD]: 75,
      [ColumnName.IMAGE_LINK]:
        'https://bulka.s3.eu-west-3.amazonaws.com/ocean-peaks.png',
    },
    {
      id: 4,
      [ColumnName.NAME]: 'Al Yaqoub Tower',
      [ColumnName.PRICE]: 6500000,
      [ColumnName.TICKET_PRICE]: 60000,
      [ColumnName.YIELD_PERCENTAGE]: 9.25,
      [ColumnName.DAYS_REMAINING]: 150,
      [ColumnName.PERCENTAGE_SOLD]: 75,
      [ColumnName.IMAGE_LINK]:
        'https://bulka.s3.eu-west-3.amazonaws.com/al-yaqoub-tower.png',
    },
  ]);
}
