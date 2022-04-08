import { quoteStore } from '@domain'
import { NextApiHandler } from 'next'

export enum QuoteAction {
    create = 'create',
    refresh = 'refresh'
}

const responseState = {
    status: 200,
    result: <Record<string, string | null>>{
        message: null
    }
}

const handler: NextApiHandler = async (req, res) => {
    const { action, filter, id } = req.query
    const shouldRefresh = action === 'refresh'

    if (shouldRefresh || !quoteStore.quotes) {
        const preRequest = await quoteStore.getQuotes()
        const result = await preRequest.json()

        quoteStore.setQuotes = result.quotes
    }

    if (id) {
        await quoteStore.getQuoteById(id as string)
    }

    switch (true) {
    case filter === 'pending':
        return res
            .status(responseState.status)
            .json({ ...responseState.result, quotes: quoteStore.pendingQuotes })
    case !!id:
        return res
            .status(responseState.status)
            .json({ ...responseState.result, quote: quoteStore.currentQuote })
    default:
        return res
            .status(responseState.status)
            .json({ ...responseState.result, quotes: quoteStore.quotes })
    }
}

export default handler
