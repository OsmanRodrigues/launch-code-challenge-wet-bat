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
import { FC } from 'react'
import { QuoteDataModel } from '@entities/quote'
import { useRouter } from 'next/router'
import { appRoute } from '@utils'
import { observer } from 'mobx-react-lite'
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
    quotes?: QuoteDataModel[],
    filter?: keyof typeof QuotesTableFilter,
    fields?: (keyof typeof QuotesTableField)[],
    shouldInteractive?: boolean
}


export const QuotesTable: FC<IQuotesTable> = observer(({
    store = quoteStore, filter, fields, shouldInteractive
}) => {
    const quotesFallback = filter ? store[QuotesTableFilter[filter]] : store.quotes
    const tableFieldsFallback = fields || tableFields
    const { replace } = useRouter()

    return (
        <TableWrapper>
            {quotesFallback.length ? (
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
