import { Knex } from "knex"

export async function up (knex: Knex): Promise<void> {
    await knex.schema.createTable('dollar_exchange_period', table =>{
      table.increments('id').primary()
      table.string('initialDate')
      table.string('finalDate')   
      table.json('data') 
    })
  };
  
  export async function down (knex: Knex): Promise<void> {
    await knex.schema.dropTable('dollar_exchange_period')
  };
  