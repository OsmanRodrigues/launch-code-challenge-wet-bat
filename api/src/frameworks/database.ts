import knex from 'knex'
import knexfile  from '../../knexfile'
import { Model } from 'objection'
import { config as mainConfig, logger } from '@utils'
import Container, { Service } from 'typedi'

@Service()
export class DatabaseFacade {

    constructor(
        private config = knexfile[mainConfig.currentEnv as string],
        private db = knex<any, Record<string, any>[]>(config)
    ) {}

    setup() {
        try {
            if (this.db) {
                Model.knex(this.db)
                logger.info('Database is ready to connections.')
            }
        } catch (err) {
            throw new Error(`Database start error: ${err}.`)
        }
    }

}

export const database = Container.get(DatabaseFacade)
