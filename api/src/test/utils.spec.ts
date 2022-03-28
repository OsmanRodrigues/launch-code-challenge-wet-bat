import 'reflect-metadata'
import configSpec from '@utils/config.spec'
import { Suite } from 'mocha'

describe('Utils unit testing', function(this: Suite){
    describe('Config', configSpec)
})
