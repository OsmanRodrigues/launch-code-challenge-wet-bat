import { Paragraph } from '../../shared'
import { QuoteDataModel } from '@entities/quote'
import { FC } from 'react'
import { CardWithActions, QuotesTable } from '../common-layout'

interface IAllQuotesTable {
    quotes: QuoteDataModel[]
}

export const AllQuotesView: FC<IAllQuotesTable> = ({quotes}) => (
    <CardWithActions iconMain="Quote" title="All quotes">
        {quotes?.length ?
            <QuotesTable quotes={quotes} fields={['Id', 'Name']} /> :
            <Paragraph>No data.</Paragraph>
        }
    </CardWithActions>
)
