import { FC } from 'react'
import { Paragraph } from '../../shared/typography.atm'
import { CurrentQuoteDetailsCard } from './current-quote-details-card'
import { CardWithActions } from '../common-layout'
import { useQueryQuote } from '@adapters/query'
import { useRouter } from 'next/router'

export const CurrentQuoteDetailsView: FC = () => {
    const { query } = useRouter()
    const [{data, error, loading}] = useQueryQuote(`id=${query.id}`)

    return (
        <CardWithActions iconMain="Quote" title={`Quote ID: ${1 || ''}`}>
            { loading ?<Paragraph>Loading quote infos...</Paragraph> :null}
            { error ?<Paragraph>An error occourried on get this quote infos.</Paragraph> :null}
            {data?.quote ?
                <CurrentQuoteDetailsCard quote={data.quote} /> :
                <Paragraph> No detailed data. Select one in all quotes </Paragraph>
            }
        </CardWithActions>
    )
}

