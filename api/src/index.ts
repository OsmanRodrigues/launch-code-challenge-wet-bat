import 'reflect-metadata'
import { database } from '@frameworks/database'
import { server } from './server'

database.setup()
server.run()
