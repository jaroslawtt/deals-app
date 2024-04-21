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
  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at',
};

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(DatabaseTableName.DEALS, (table) => {
    table.increments(ColumnName.ID).primary();
    table.string(ColumnName.NAME, 255).notNullable();
    table.decimal(ColumnName.PRICE, 10, 2).notNullable();
    table.decimal(ColumnName.TICKET_PRICE, 10, 2).notNullable();
    table.decimal(ColumnName.YIELD_PERCENTAGE, 5, 2).notNullable();
    table.integer(ColumnName.DAYS_REMAINING).notNullable();
    table.decimal(ColumnName.PERCENTAGE_SOLD, 5, 2).notNullable();
    table.string(ColumnName.IMAGE_LINK).nullable();
    table
      .dateTime(ColumnName.CREATED_AT)
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .dateTime(ColumnName.UPDATED_AT)
      .notNullable()
      .defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(DatabaseTableName.DEALS);
}
