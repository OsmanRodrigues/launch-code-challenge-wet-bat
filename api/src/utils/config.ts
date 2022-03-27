import { config as dotenvConfig, DotenvParseOutput } from 'dotenv'

class ConfigSingleton {

    static currentEnv = process.env.NODE_ENV
    static rootDir = process.env.PWD
    static env = dotenvConfig({
        path: `${this.rootDir}/.env.${this.currentEnv}`,
    }).parsed as DotenvParseOutput

}

export const config = ConfigSingleton
