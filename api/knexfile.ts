import type { Knex } from 'knex'
import { knexSnakeCaseMappers } from 'objection'
import { config as configUtils } from './src/utils/config'

const env = configUtils.env

const config: { [key: string]: Knex.Config } = {
    development: {
        client: 'postgresql',
        connection: {
            database: env.DB_NAME,
            user: env.DB_USER,
            password: env.DB_PWD
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        },
        seeds:{
            directory: './seeds'
        },
        ...knexSnakeCaseMappers
    },
    production: {
        client: 'postgresql',
        connection: {
            database: env.DB_NAME,
            user: env.DB_USER,
            password: env.DB_PWD
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        },
        ...knexSnakeCaseMappers
    }
}

module.exports = config
