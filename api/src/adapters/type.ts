import Application from 'koa'
import KoaRouter from '@koa/router'

export type RouterContext = Application.ParameterizedContext<Application.DefaultState, Application.DefaultContext & KoaRouter.RouterParamContext<Application.DefaultState, Application.DefaultContext>, any>
export type ControllerMethod = (ctx: RouterContext ) => void
