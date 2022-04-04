import { Resolvers, ServerRequestFacade } from '@frameworks/server-request'
import { useRouter } from 'next/router'

export const useRevalidateISR = (resolvers?: Resolvers<void>) => {
    const requester = new ServerRequestFacade()
    const revalidateToken = process.env.NEXT_PUBLIC_REVALIDATE_TOKEN
    const { asPath, query, replace } = useRouter()

    const revalidate = () => {
        replace(`${asPath}&${revalidateToken}`)
        requester.request(fetch(`/api/revalidate?id=${query.id}`), resolvers)
    }

    return {
        revalidate
    }
}
