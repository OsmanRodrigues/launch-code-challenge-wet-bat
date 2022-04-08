import { useCallback } from 'react'
import { KeyedMutator, useSWRConfig } from 'swr'
import useSWRImmutable from 'swr/immutable'

interface QueryState {
    data: any
    error: any
    loading: boolean
}

interface QueryHandler {
    mutate: KeyedMutator<any>
    refresh: ()=> void
}

type UseMutateAdapter = (query?: string) => [QueryState, QueryHandler]

export const useQueryQuote: UseMutateAdapter = (query) => {
    const baseUrl =  `/api/quote/query${query ? `?${query}` : ''}`
    const refreshQuery = 'action=refresh'
    const queryUnion = query ? '&' : '?'
    const { data, error, mutate } = useSWRImmutable(baseUrl, url =>
        fetch(url).then(result => result.json())
    )
    const { mutate: queryMutate } = useSWRConfig()

    const refresh = useCallback(() => {
        queryMutate(
            fetch(`${baseUrl}${queryUnion}${refreshQuery}`).then(result =>
                result.json().then(data => mutate(data))
            )
        )
    }, [baseUrl, mutate, queryMutate, queryUnion])

    return [
        { data, error, loading: !data && !error },
        { mutate, refresh }
    ]
}
