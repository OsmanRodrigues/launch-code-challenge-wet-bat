import { action, flow, makeAutoObservable, observable } from 'mobx'

enum RequestStatus {
    idle = 'idle',
    loading = 'loading',
    success = 'success',
    fail = 'fail'
}

interface RequestState<
    Data = Record<string, any>,
    Error = unknown
> {
    status: keyof typeof RequestStatus,
    lastStatus: keyof typeof RequestStatus,
    data?: Data | null,
    error?: Error | null
}

interface Resolvers<Data> {
    onSucess?: (data: Data) => void
    onFail?: (requestError: unknown) => void
}

type RequesMethod<Data, Body = Record<string, any>> = (
    endpoint?: string,
    address?: string,
    body?: Body,
    resolvers?: Resolvers<Data>
) => void

export class ServerRequestFacade<MainData = any | any[]> {
    private baseUrl: string = process.env.NEXT_PUBLIC_API_URL as string
    state: RequestState<MainData> = {
        status: 'idle',
        lastStatus: 'idle'
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
        resolvers?: Resolvers<MainData>
    ): any {
        this.state.status = 'loading'
        try {
            const getResult = yield preRequest
            const data = yield getResult.json()
            if (address) {
                const adressedData: any = { [address]: data }
                this.state.data = { ...this.state.data, ...adressedData }
            }
            else this.state.data = data
            this.state.status = 'success'
            resolvers?.onSucess?.(data)
        } catch (err) {
            this.state.error = err
            this.state.status = 'fail'
            resolvers?.onFail?.(err)
        } finally {
            this.state.lastStatus = this.state.status
            this.state.status = 'idle'
        }
    }

    get: RequesMethod<MainData> = (
        endpoint,
        address,
        _,
        resolvers
    ) => {
        const url = endpoint ? this.baseUrl + endpoint : this.baseUrl
        this.request(fetch(url), address, resolvers)
    }

    post: RequesMethod<MainData> = (endpoint, address, body, resolvers) => {
        const url = endpoint ? this.baseUrl + endpoint : this.baseUrl
        const init: RequestInit = {
            body: JSON.stringify(body),
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        this.request(fetch(url, init), address, resolvers)
    }

}
