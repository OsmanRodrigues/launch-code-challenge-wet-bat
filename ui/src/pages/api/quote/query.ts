import { quoteStore } from '@domain'
import { NextApiHandler } from 'next'

export enum QuoteAction {
    create = 'create',
    refresh = 'refresh'
}

const handler: NextApiHandler = async (req, res) => {
    const shouldRefresh = req.query?.action === 'refresh'
    const filter = req.query?.filter

    if (shouldRefresh || !quoteStore.quotes) {
        const preRequest = await quoteStore.getQuotes()
        const result = await preRequest.json()

        quoteStore.setQuotes = result.quotes
    }

    switch (true) {
    case filter === 'pending':
        return res.json(quoteStore.pendingQuotes)
    default:
        return res.json(quoteStore.quotes)
    }
}

export default handler
