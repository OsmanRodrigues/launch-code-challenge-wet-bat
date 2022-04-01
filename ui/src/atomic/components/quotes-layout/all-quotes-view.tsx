import { FC, useContext } from 'react'
import { QuotesPageContext } from 'pages/quotes/[id]'
import { QuoteDataModel } from '@entities/quote'
import { CardWithActions, QuotesTable } from '../common-layout'
import { Paragraph } from '../../shared'

interface IAllQuotesTable {
    quotes?: QuoteDataModel[]
}

export const AllQuotesView: FC<IAllQuotesTable> = () => {
    const { quotes } = useContext(QuotesPageContext)

    return (
        <CardWithActions iconMain="Quote" title="All quotes">
            {quotes?.length ?
                <QuotesTable quotes={quotes} fields={['Id', 'Name']} shouldInteractive/> :
                <Paragraph>No data.</Paragraph>
            }
        </CardWithActions>
    )
}
