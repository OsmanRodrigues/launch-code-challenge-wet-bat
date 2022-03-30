import { action, flow, makeAutoObservable, observable } from 'mobx'

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

type RequesMethod<Data, Body = Record<string, any>> = (
    endpoint?: string,
    address?: string,
    body?: Body,
    resolvers?: Resolvers<Data>,
    shouldCache?: boolean
) => void

export class ServerRequestFacade<MainData = any | any[]> {
    private baseUrl: string = process.env.NEXT_PUBLIC_API_URL as string
    state: RequestState<MainData> = {
        status: 'idle',
        lastUpdate: null
    }

    constructor() {
        makeAutoObservable(this, {
            state: observable,
            get: action,
            post: action,
            request: flow
        })
    }

    *request (
        preRequest: Promise<any>,
        address = '',
        resolvers?: Resolvers<MainData>,
        shouldCache = false
    ): any {

        this.state.status = 'loading'
        if (shouldCache && this.state.lastUpdate) {
            return
        }

        try {
            const getResult = yield preRequest
            const data = yield getResult.json()

            if (address) {
                const adressedData: any = { [address]: data }
                this.state.data = { ...this.state.data, ...adressedData }
            }
            else this.state.data = data

            this.state.lastUpdate = Date.now()
            this.state.status = 'success'
            resolvers?.onSucess?.(data)
        } catch (err) {
            this.state.error = err
            this.state.lastUpdate = Date.now()
            this.state.status = 'fail'
            resolvers?.onFail?.(err)
        }
    }

    get: RequesMethod<MainData> = (
        endpoint,
        address,
        _,
        resolvers,
        shouldCache
    ) => {
        const url = endpoint ? this.baseUrl + endpoint : this.baseUrl
        this.request(fetch(url), address, resolvers, shouldCache)
    }

    post: RequesMethod<MainData> = (
        endpoint,
        address,
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
        this.request(fetch(url, init), address, resolvers, shouldCache)
    }

}
