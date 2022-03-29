import knex from 'knex'
import knexfile  from '../../knexfile'
import { Model } from 'objection'
import { config, logger } from '@utils'

export class DatabaseFacade {

    constructor(
        private db = knex<any, Record<string, any>[]>(knexfile[config.CURRENT_ENV as string])
    ) {}

    setup() {
        if (this.db) {
            this.db
                .select('tablename')
                .from('pg_catalog.pg_tables')
                .whereLike('tablename', 'knex%')
                .then(result => {
                    if (!result.length) logger.error('Database started withou Knex setup.')
                    Model.knex(this.db)
                    logger.info('Database is ready to connections.')
                })
                .catch(dbConnectionErr => {
                    logger.error(`Database start error: ${dbConnectionErr}.`)
                })
        } else {
            logger.error('Database setup falied. Restart the server.')
        }
    }

}
