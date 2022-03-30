enum RequestStatus {
    idle = 'idle',
    loading = 'loading',
    success = 'success',
    fail = 'fail'
}

export interface RequestState<
    Data = Record<string, any>,
    Error = unknown
> {
    status: keyof typeof RequestStatus,
    data?: Data | null,
    error?: Error | null,
    lastUpdate: number | null
}

export interface Resolvers<Data> {
    onSucess?: (data: Data) => void
    onFail?: (requestError: unknown) => void
}

export type RequesMethod<Data, Body = Record<string, any>> = (
    endpoint?: string,
    body?: Body,
    resolvers?: Resolvers<Data>,
    shouldCache?: boolean
) => Promise<RequestState<Data>>

export class ServerRequestFacade<MainData = any | any[]> {
    constructor(
        private baseUrl: string = process.env.NEXT_PUBLIC_API_URL as string,
        public state: RequestState<MainData> = {
            status: 'idle',
            lastUpdate: null
        }

    ) {}

    async request (
        preRequest: Promise<any>,
        resolvers?: Resolvers<MainData>,
        shouldCache = false
    ) {
        this.state.status = 'loading'
        if (shouldCache && this.state.lastUpdate) {
            return this.state
        }

        try {
            const getResult = await preRequest
            const data = await getResult.json()
            this.state.data = data
            this.state.lastUpdate = Date.now()
            this.state.status = 'success'
            resolvers?.onSucess?.(data)
        } catch (err) {
            this.state.error = err
            this.state.lastUpdate = Date.now()
            this.state.status = 'fail'
            resolvers?.onFail?.(err)
        }

        return this.state
    }

    get: RequesMethod<MainData> = (
        endpoint,
        _,
        resolvers,
        shouldCache
    ) => {
        const url = endpoint ? this.baseUrl + endpoint : this.baseUrl
        return this.request(fetch(url), resolvers, shouldCache)
    }

    post: RequesMethod<MainData> = async (
        endpoint,
        body,
        resolvers,
        shouldCache
    ) => {
        const url = endpoint ? this.baseUrl + endpoint : this.baseUrl
        const init: RequestInit = {
            body: JSON.stringify(body),
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return this.request(fetch(url, init), resolvers, shouldCache)
    }

}
