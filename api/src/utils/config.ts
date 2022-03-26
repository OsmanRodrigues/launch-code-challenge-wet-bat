import dotenv, { DotenvParseOutput } from 'dotenv'

class ConfigSingleton {
    constructor(
        public currentEnv = process.env.NODE_ENV,
        public rootDir = process.env.PWD,
        public env: DotenvParseOutput | undefined = undefined
    ) {
        this.env = dotenv.config({
            path: `${this.rootDir}/.env.${this.currentEnv}`,
        }).parsed
    }
}

export const config = new ConfigSingleton()
