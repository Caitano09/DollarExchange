export default {
    development: {
      client: 'mysql2',/*you can use 'mysql2' to mysql or 'pg' to postgres */
      connection: {
          host: process.env.MYSQL_HOST|| 'localhost',
          user: process.env.MYSQL_USER ||'root',
          password: process.env.MYSQL_PASSWORD || '1234',
          database: process.env.MYSQL_DATABASE || 'dollar_exchange'
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: `${__dirname}/src/database/migrations`,
      },
    },
  };