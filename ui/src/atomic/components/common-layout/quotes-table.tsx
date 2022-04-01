import { TableHeaders, TableRow, TableHead, TableBody, TableData, Table, Button, Icon, TableWrapper } from '../../shared'
import { FC } from 'react'
import { QuoteDataModel } from '@entities/quote'
import { useRouter } from 'next/router'
import { appRoute } from '@utils'

export enum QuotesTableFields {
    Id = 'id',
    Name = 'peopleContact',
    Destination = 'destinationLocation',
    Price = 'priceFinal'
}

const tableFields = Object.keys(QuotesTableFields)

interface IQuotesTable {
    quotes: QuoteDataModel[],
    fields?: (keyof typeof QuotesTableFields)[],
    shouldInteractive?: boolean
}

export const QuotesTable: FC<IQuotesTable> = ({ quotes, fields, shouldInteractive }) => {
    const tableFieldsFallback = fields || tableFields
    const { replace } = useRouter()

    return (
        <TableWrapper>
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
                                    QuotesTableFields[
                                        field as keyof typeof QuotesTableFields
                                    ]
                                const currentData = data[currentField]

                                return (
                                    <TableData key={`${currentData}_${index}`}>
                                        {`${
                                            field === 'priceFinal' ? '$ ' : ''
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
        </TableWrapper>
    )
}
