import 'reflect-metadata'
import { DatabaseFacade } from '@frameworks/database'
import { ServerFacade } from './server'
import Container from 'typedi'



new DatabaseFacade().setup()
Container.get(ServerFacade).run()
