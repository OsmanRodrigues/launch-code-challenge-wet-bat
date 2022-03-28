import { config as dotenvConfig, DotenvParseOutput } from 'dotenv'
import Container, { Service } from 'typedi'

@Service()
class ConfigSingleton {

    currentEnv = process.env.NODE_ENV
    rootDir = process.env.PWD
    env = dotenvConfig({
        path: `${this.rootDir}/.env.${this.currentEnv}`,
    }).parsed as DotenvParseOutput

}

export const config = Container.get(ConfigSingleton)
