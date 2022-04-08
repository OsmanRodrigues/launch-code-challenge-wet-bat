import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import {
    TableHeaders,
    TableRow,
    TableHead,
    TableBody,
    TableData,
    Table,
    Button,
    Icon,
    TableWrapper,
    Paragraph
} from '../../shared'
import { QuoteDataModel } from '@entities/quote'
import { appRoute } from '@utils/constants'
import { QuoteStore, quoteStore } from '@domain/quote-domain/quote-store'

export enum QuotesTableFilter {
    pending = 'pendingQuotes'
}

export enum QuotesTableField {
    Id = 'id',
    Name = 'peopleContact',
    Destination = 'destinationLocation',
    Price = 'priceFinal'
}

const tableFields = Object.keys(QuotesTableField)

interface IQuotesTable {
    store?: QuoteStore,
    quotes?: QuoteDataModel[] | null,
    filter?: keyof typeof QuotesTableFilter,
    fields?: (keyof typeof QuotesTableField)[],
    shouldInteractive?: boolean
}


export const QuotesTable: FC<IQuotesTable> = observer(({
    store = quoteStore, quotes, filter, fields, shouldInteractive
}) => {
    const { replace } = useRouter()
    const tableFilter = filter ? QuotesTableFilter[filter] : null
    const quotesFallback = quotes ?? (
        tableFilter ? store[tableFilter] : store.quotes
    )
    const tableFieldsFallback = fields || tableFields

    return (
        <TableWrapper>
            {quotesFallback?.length ? (
                <Table>
                    <TableHeaders>
                        <TableRow key={'head'}>
                            {tableFieldsFallback.map(headData => (
                                <TableHead key={headData}>{headData}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeaders>
                    <TableBody>
                        {quotesFallback.map((data: QuoteDataModel) => (
                            <TableRow key={data.id}>
                                {tableFieldsFallback.map((field, index) => {
                                    const currentField =
                                        QuotesTableField[
                                            field as keyof typeof QuotesTableField
                                        ]
                                    const currentData = data[currentField]

                                    return (
                                        <TableData
                                            key={`${currentData}_${index}`}
                                        >
                                            {`${
                                                field === 'priceFinal'
                                                    ? '$ '
                                                    : ''
                                            }${currentData}`}
                                        </TableData>
                                    )
                                })}
                                {shouldInteractive ? (
                                    <TableData>
                                        <Button
                                            typeStyle="icon"
                                            onClick={() =>
                                                replace(
                                                    `${appRoute.quotes}/${data.id}`
                                                )
                                            }
                                        >
                                            <Icon.Show
                                                title={`Show details for quote id ${data.id}`}
                                                color="primary"
                                            />
                                        </Button>
                                    </TableData>
                                ) : null}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <Paragraph>No data.</Paragraph>
            )}
        </TableWrapper>
    )
})
