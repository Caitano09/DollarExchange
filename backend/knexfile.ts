export default {
    development: {
      client: 'mysql2',/*you can use 'mysql2' to mysql or 'pg' to postgres */
      connection: {
          host: 'localhost',
          user: 'root',
          password: '1234',
          database: 'dollar_exchange'
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: `${__dirname}/src/database/migrations`,
      },
    },
  };