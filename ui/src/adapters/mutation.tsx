import { FieldNamesMarkedBoolean } from 'react-hook-form'
import { KeyedMutator, useSWRConfig } from 'swr'
import useSWRImmutable from 'swr/immutable'

interface MutationState {
    data: any,
    error: any,
    loading: boolean
}

interface MutationHandler {
    mutate: KeyedMutator<any>
    mutateCMS: (action:string, data: any) => void
}

type UseMutateAdapter = () => [MutationState, MutationHandler]

export const useMutateQuote: UseMutateAdapter = () => {
    const quoteMutationUrl = '/api/quote/mutation'
    const { data, error, mutate } = useSWRImmutable(quoteMutationUrl, url =>
        fetch(url).then(result => result.json())
    )
    const { mutate: mutateCMS } = useSWRConfig()

    const handleMutateCMS = (action:string, data: any) => {
        mutateCMS(
            fetch(`${quoteMutationUrl}?action=${action}`, {
                method: 'post',
                body: JSON.stringify(data)
            }).then(result =>
                result.json().then((returnedData: any) => mutate(returnedData))
            )
        )
    }

    return [
        { data, error, loading: !data && !error },
        { mutate, mutateCMS: handleMutateCMS }
    ]
}
