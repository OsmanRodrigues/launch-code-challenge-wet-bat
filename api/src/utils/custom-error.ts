import { ErrorHandlerConstant, HttpStatusCodeConstant } from './constant'

export class CustomError extends Error {
    constructor(
        public message: string,
        public error: ErrorHandlerConstant,
        public status: HttpStatusCodeConstant
    ) {
        super(message)
    }
}
