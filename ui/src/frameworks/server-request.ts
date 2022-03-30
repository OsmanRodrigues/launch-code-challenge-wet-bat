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

interface Resolvers {
    onSucess?: (data: any) => void
    onFail?: (requestError: unknown) => void
}

type RequesMethod<Body = Record<string, any>> = (
    endpoint?: string,
    address?: string,
    body?: Body,
    resolvers?: Resolvers
) => void

export class ServerRequest {
    private baseUrl: string = process.env.NEXT_PUBLIC_API_URL as string
    state: RequestState = {
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
        resolvers?: Resolvers
    ): any {
        this.state.status = 'loading'
        try {
            const getResult = yield preRequest
            const data = yield getResult.json()
            if (address) this.state.data = { ...this.state.data, [address]: data }
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

    get: RequesMethod = (
        endpoint,
        address,
        _,
        resolvers
    ) => {
        const url = endpoint ? this.baseUrl + endpoint : this.baseUrl
        this.request(fetch(url), address, resolvers)
    }

    post: RequesMethod = (endpoint, address, body, resolvers) => {
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
