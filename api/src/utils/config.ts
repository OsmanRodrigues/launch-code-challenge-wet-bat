import { config as dotenvConfig } from 'dotenv'

class ConfigSingleton {

    static currentEnv = process.env.NODE_ENV
    static rootDir = process.env.PWD
    static env = dotenvConfig({
        path: `${this.rootDir}/.env.${this.currentEnv}`,
    }).parsed

}

export const config = ConfigSingleton
