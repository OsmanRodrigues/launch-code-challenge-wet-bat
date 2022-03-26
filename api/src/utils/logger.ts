import { pino } from 'pino'
import { config } from './config'

class LoggerSingleton {

    static logger = pino({
        enabled: (!config.env?.LOG_DISABLED),
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true
            }
        }
    })

}

export const { logger } = LoggerSingleton
