import { DatabaseFacade } from '@frameworks/database'
import { ServerFacade } from './server'

new DatabaseFacade().setup()
new ServerFacade().run()
