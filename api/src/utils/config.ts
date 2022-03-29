import { config as dotenvConfig, DotenvParseOutput } from 'dotenv'

class ConfigSingleton {

    CURRENT_ENV = process.env.NODE_ENV as string
    ROOT_DIR = process.env.PWD as string
    env = dotenvConfig({
        path: `${this.ROOT_DIR}/.env.${this.CURRENT_ENV}`,
    }).parsed as DotenvParseOutput

    constructor() {
        this.env = {
            CURRENT_ENV: this.CURRENT_ENV,
            ROOT: this.ROOT_DIR,
            VERSION: process.env.npm_package_version,
            ...this.env,
            ...process.env
        } as DotenvParseOutput
    }

}

export const config = new ConfigSingleton()
