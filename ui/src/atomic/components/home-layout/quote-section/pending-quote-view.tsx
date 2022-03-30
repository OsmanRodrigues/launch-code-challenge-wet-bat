import {
    Box,
    Card,
    H2,
    H4,
    Separator,
    Table,
    TableBody,
    TableData,
    TableHead,
    TableHeaders,
    TableRow
} from '../../../shared'
import { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useGetQuotes } from '@domain'

const tableHeads = ['Id', 'Name','Destination', 'Price']

export const PendingQuoteView: FC = observer(() => {
    const [state, getQuotes] = useGetQuotes()
    const tableData = state.data?.quotesList?.quotes

    useEffect(() => {
        getQuotes(undefined, true)
    }, [getQuotes])

    return (
        <Card disableInteractivity fluid>
            <Box fluid>
                <H2 color='secondary'>Pending quotes</H2>
                <Separator outlined />
                {tableData?.length ? (
                    <Table>
                        <TableHeaders>
                            <TableRow key={'head'}>
                                {tableHeads.map(headData => (
                                    <TableHead key={headData}>
                                        {headData}
                                    </TableHead>
                                ))}
                            </TableRow>
                        </TableHeaders>
                        <TableBody>
                            {tableData.map(data => (
                                <TableRow key={data.id}>
                                    <TableData>{data.id}</TableData>
                                    <TableData>{data.peopleContact}</TableData>
                                    <TableData>{data.destinationLocation}</TableData>
                                    <TableData>{data.priceFinal}</TableData>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (
                    <H4>No pending quotes info.</H4>
                )}
            </Box>
        </Card>
    )
})
