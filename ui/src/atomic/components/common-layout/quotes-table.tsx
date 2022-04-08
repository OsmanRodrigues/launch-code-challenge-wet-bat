import { FC } from 'react'
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

export enum QuotesTableField {
    Id = 'id',
    Name = 'peopleContact',
    Destination = 'destinationLocation',
    Price = 'priceFinal'
}

const tableFields = Object.keys(QuotesTableField)

interface IQuotesTable {
    quotes: QuoteDataModel[],
    fields?: (keyof typeof QuotesTableField)[],
    shouldInteractive?: boolean
}

export const QuotesTable: FC<IQuotesTable> = ({
    quotes, fields, shouldInteractive
}) => {
    const { replace } = useRouter()
    const tableFieldsFallback = fields || tableFields
    const hasData = !!quotes.length

    return (
        <TableWrapper>
            { hasData ? (
                <Table>
                    <TableHeaders>
                        <TableRow key={'head'}>
                            {tableFieldsFallback.map(headData => (
                                <TableHead key={headData}>{headData}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeaders>
                    <TableBody>
                        {quotes.map((data: QuoteDataModel) => (
                            <TableRow key={data.id}>
                                {tableFieldsFallback.map((field, index) => {
                                    const currentField =
                                        QuotesTableField[
                                            field as keyof typeof QuotesTableField
                                        ]
                                    const currentData = data[currentField]
                                    const isPrice = currentField === QuotesTableField.Price

                                    return (
                                        <TableData
                                            key={`${currentData}_${index}`}
                                        >
                                            {`${isPrice ? '$ ' : ''}${currentData}`}
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
}
