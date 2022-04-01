import { TableHeaders, TableRow, TableHead, TableBody, TableData, Table } from '../../shared'
import { FC } from 'react'
import { QuoteDataModel } from '@entities/quote'

export enum QuotesTableFields {
    Id = 'id',
    Name = 'peopleContact',
    Destination = 'destinationLocation',
    Price = 'priceFinal'
}

const tableFields = Object.keys(QuotesTableFields)

interface IQuotesTable {
    quotes: QuoteDataModel[],
    fields?: (keyof typeof QuotesTableFields)[]
}

export const QuotesTable: FC<IQuotesTable> = ({ quotes, fields }) => {
    const tableFieldsFallback = fields || tableFields

    return (
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
                            const currentField = QuotesTableFields[field as keyof typeof QuotesTableFields]
                            const currentData = data[currentField]

                            return (
                                <TableData key={`${currentData}_${index}`}>
                                    {`${field === 'priceFinal' ? '$ ' : ''}${currentData}`}
                                </TableData>
                            )
                        })}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
