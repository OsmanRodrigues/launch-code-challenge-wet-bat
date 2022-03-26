import { Context } from 'koa'
import { ForeignKeyViolationError, ValidationError } from 'objection'
import { ErrorHandlerConstant, HttpErrorConstant, HttpStatusCodeConstant } from './constant'
import { logger } from './logger'

interface ErrorHandlerContext extends Context {
    status: HttpStatusCodeConstant,
    body: Record<string, any>
}

class ErrorHandlerSingleton {

    public static async handle(ctx: ErrorHandlerContext, next: ()=> Promise<any>) {
        try {
            await next()
        } catch (err: any) {
            switch (true) {
            case err instanceof ValidationError:
                ctx.status = HttpStatusCodeConstant.BadRequest
                ctx.body = {
                    error: ErrorHandlerConstant.ValidationError,
                    errors: err.data,
                }
                break

            case err instanceof ForeignKeyViolationError:
                ctx.status = HttpStatusCodeConstant.Conflict
                ctx.body = {
                    error: ErrorHandlerConstant.ForeignKeyViolationError,
                }
                break

            default:
                ctx.status = HttpStatusCodeConstant.InternalServerError
                ctx.body = {
                    error: HttpErrorConstant.InternalServerError,
                    message: err.message || {},
                }
                break

            }

            ErrorHandlerSingleton.logError(ctx)
        }

    }

    private static logError(ctx: ErrorHandlerContext) {
        const { body: { error, message, errors } } = ctx
        const getLog = (logName, logTarget) => logTarget ? `${logName}: ${logTarget}` : ''
        const errorLog = getLog('error', error)
        const msgLog = getLog('message', message)
        const errorsLog = getLog('errors', errors)

        logger.error(`${errorLog} ${msgLog} ${errorsLog}`)
    }

}

export const errorHandler = ErrorHandlerSingleton
