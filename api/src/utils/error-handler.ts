import { Context } from 'koa'
import { ForeignKeyViolationError, NotNullViolationError, ValidationError } from 'objection'
import { ErrorHandlerConstant, HttpErrorConstant, HttpStatusCodeConstant } from './constant'
import { CustomError } from './custom-error'
import { logger } from './logger'

interface ErrorHandlerContext extends Context {
    status: HttpStatusCodeConstant,
    body: Record<string, any>
}

class ErrorHandlerSingleton {

    public handle = async (ctx: ErrorHandlerContext, next: ()=> Promise<any>) => {
        try {
            await next()
        } catch (err: any) {
            switch (true) {
            case err instanceof NotNullViolationError:
                ctx.status = HttpStatusCodeConstant.BadRequest
                ctx.body = {
                    error: ErrorHandlerConstant.NotNullViolationError,
                    message: `Inconsistent ${err.column} field value.`
                }
                this.logError(ctx)
                break
            case err instanceof ValidationError:
                ctx.status = HttpStatusCodeConstant.BadRequest
                ctx.body = {
                    error: ErrorHandlerConstant.ValidationError,
                    errors: err.data,
                }
                this.logError(ctx)
                break

            case err instanceof ForeignKeyViolationError:
                ctx.status = HttpStatusCodeConstant.Conflict
                ctx.body = {
                    error: ErrorHandlerConstant.ForeignKeyViolationError,
                }
                this.logError(ctx)
                break

            case err instanceof CustomError:
                ctx.status = err.status
                ctx.body = {
                    error: err.error,
                    message: err.message
                }
                break

            default:
                ctx.status = HttpStatusCodeConstant.InternalServerError
                ctx.body = {
                    error: HttpErrorConstant.InternalServerError,
                    message: err.message || {},
                }
                this.logError(ctx)
                break

            }

        }
    }

    private logError = (ctx: ErrorHandlerContext) => {
        const { body: { error, message, errors } } = ctx
        const getLog = (logName, logTarget) => logTarget ? `${logName}: ${logTarget}` : ''
        const errorLog = getLog('error', error)
        const msgLog = getLog('message', message)
        const errorsLog = getLog('errors', errors)

        logger.error(`${errorLog} ${msgLog} ${errorsLog}`)
    }

}

export const errorHandler = new ErrorHandlerSingleton()
