import { expect } from 'chai'
import { config } from './config'

export default () => {
    describe('Envs config testing', () => {
        it('should load envs', () => {
            expect(config.currentEnv).not.to.be.a('null')
            expect(config.currentEnv).to.be.a('string')
            expect(config.rootDir).not.to.be.a('null')
            expect(config.rootDir).to.be.a('string')
            expect(config.env).not.to.be.a('undefined')
            expect(config.env)
                .and.haveOwnProperty('HOST')
                .to.be.a('string')
        })
    })
}

