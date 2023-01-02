import knexFile from '../../knexfile'
import knex from 'knex'

const conn = knex(knexFile.development)

export default conn