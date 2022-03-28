export type DomainQueryMethod<Return> = (queryParam?: Record<string, any> ) => Promise<Return>
