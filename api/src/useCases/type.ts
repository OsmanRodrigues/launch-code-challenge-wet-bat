export type DomainMethod<Return> = (param?: Record<string, any> ) => Promise<Return>
