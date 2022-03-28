import { config as dotenvConfig, DotenvParseOutput } from 'dotenv'
import Container, { Service } from 'typedi'

@Service()
class ConfigSingleton {
    private nodeEnv = {
        version: process.env.npm_package_version
    }
    currentEnv = process.env.NODE_ENV
    rootDir = process.env.PWD
    env = dotenvConfig({
        path: `${this.rootDir}/.env.${this.currentEnv}`,
    }).parsed as DotenvParseOutput

    constructor() {
        this.env = {...this.env, ...this.nodeEnv} as DotenvParseOutput
    }
}

export const config = Container.get(ConfigSingleton)
