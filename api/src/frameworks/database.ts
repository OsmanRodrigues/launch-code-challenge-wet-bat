import knex, { Knex } from 'knex'
import knexfile  from '../../knexfile'
import { Model } from 'objection'
import { config as mainConfig, logger } from '@utils'
import Container, { Service } from 'typedi'

@Service()
export class DatabaseFacade {

    constructor(
        private knexDb: Knex<any, Record<string, any>[]> | null = null,
        private config = knexfile[mainConfig.currentEnv as string]
    ) {
        this.knexDb = knex<any, Record<string, any>[]>(this.config)
    }

    setup() {
        try {
            if (this.knexDb) {
                Model.knex(this.knexDb)
                logger.info('Database is ready to connections.')
            }
        } catch (err) {
            throw (`Database sta error: ${err}`)
        }
    }

}

export const database = Container.get(DatabaseFacade)
