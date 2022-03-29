import { expect } from 'chai'
import { config } from './config'

export default () => {
    describe('Envs config testing', () => {
        it('should load envs', () => {
            expect(config.CURRENT_ENV).not.to.be.a('null')
            expect(config.CURRENT_ENV).to.be.a('string')
            expect(config.ROOT_DIR).not.to.be.a('null')
            expect(config.ROOT_DIR).to.be.a('string')
            expect(config.env).not.to.be.a('undefined')
            expect(config.env)
                .and.haveOwnProperty('HOST')
                .to.be.a('string')
        })
    })
}

