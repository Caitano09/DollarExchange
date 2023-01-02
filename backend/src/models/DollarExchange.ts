import { Model, ModelObject } from "objection";
import knex from "../database";

export default class DollarExchange extends Model{
    id!: number
    initialDate!: string
    finalDate!: string
    data!: any

    static jsonAttributes = ['data']
    static tableName = 'dollar_exchange_period'
    static idColumn = 'id'
}

DollarExchange.knex(knex)

export type DollarExchangeShape = ModelObject<DollarExchange>