import { quoteStore } from '@domain'
import { NextApiHandler } from 'next'
import { QuoteAction } from './query'

const responseState = {
    status: 200,
    result: {
        message: null
    }
}

const handler: NextApiHandler = async (req, res) => {
    if (req.body) {
        const query = req.query
        switch (true) {
        case query.action === QuoteAction.create: {
            const quoteData = req.body
            const preRequest = await quoteStore.createQuote(quoteData)
            const quoteActionResult = await preRequest.json()
            responseState.status = preRequest.status
            responseState.result = { ...quoteActionResult, action: QuoteAction.create }
        }}
    }

    return res.status(responseState.status).json(responseState.result)
}

export default handler
