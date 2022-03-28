import Application from 'koa'
import KoaRouter from 'koa-router'

export type RouterContext = Application.ParameterizedContext<any, KoaRouter.IRouterParamContext<any, Record<string, unknown>>, any>
export type ControllerMethod = (ctx: RouterContext ) => void
