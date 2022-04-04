import { getRevalidateParams } from '@utils'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
    const { id } = req.query as { id: string }

    const { shouldRevalidate } = getRevalidateParams(id)

    if (shouldRevalidate) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    try {
        await res.unstable_revalidate(`/quotes/${id}`)
        return res.json({ revalidated: true })
    } catch (err) {
        return res.status(500).send('Error revalidating')
    }
}

export default handler
