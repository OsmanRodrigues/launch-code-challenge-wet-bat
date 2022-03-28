import { pino } from 'pino'
import Container, { Service } from 'typedi'
import { config } from './config'

@Service()
class LoggerSingleton {

    logger = pino({
        enabled: (!config.env?.LOG_DISABLED),
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true
            }
        }
    })

}

export const { logger } = Container.get(LoggerSingleton)
