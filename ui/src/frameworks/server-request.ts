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
    onFail?: (requestError: any) => void
}

export class ServerRequestFacade<MainData = any> {
    constructor(
        private baseUrl: string = process.env.NEXT_PUBLIC_API_URL as string,
        public state: RequestState<MainData> = {
            status: 'idle',
            lastUpdate: null
        }
    ) {}

    async request<Data>(
        preRequest: Promise<any>,
        resolvers?: Resolvers<Data|MainData>,
        shouldCache = false
    ): Promise<RequestState<Data | MainData>> {
        this.state.status = 'loading'

        if (shouldCache && !!this.state.lastUpdate) {
            return this.state
        }

        try {
            const getResult = await preRequest

            if (!getResult.ok || getResult.status >= 400)
                throw await getResult.json()

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

    get<ReturnedData = MainData>(
        endpoint: string,
        resolvers?: Resolvers<ReturnedData | MainData>,
        shouldCache?: boolean
    ): Promise<RequestState<ReturnedData | MainData>> {
        const url = endpoint ? this.baseUrl + endpoint : this.baseUrl
        return this.request(fetch(url), resolvers, shouldCache)
    }

    post<BodyData, ReturnedData>(
        endpoint: string,
        body: BodyData,
        resolvers?: Resolvers<ReturnedData | MainData>,
        shouldCache?: boolean
    ) {
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
