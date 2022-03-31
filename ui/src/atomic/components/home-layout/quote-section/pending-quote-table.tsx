import {
    Table, TableHeaders, TableRow, TableHead, TableBody, TableData
} from '../../../shared'
import { quoteStore } from '@domain/quote-domain/quote-store'
import { observer } from 'mobx-react-lite'

const tableHeads = ['Id', 'Name', 'Destination', 'Price']

export const PendingQuoteTable = observer(() => (
    <Table>
        <TableHeaders>
            <TableRow key={'head'}>
                {tableHeads.map(headData => (
                    <TableHead key={headData}>{headData}</TableHead>
                ))}
            </TableRow>
        </TableHeaders>
        <TableBody>
            {quoteStore.pendingQuotes?.map(data => (
                <TableRow key={data.id}>
                    <TableData>{data.id}</TableData>
                    <TableData>{data.peopleContact}</TableData>
                    <TableData>{data.destinationLocation}</TableData>
                    <TableData>{`$ ${data.priceFinal}`}</TableData>
                </TableRow>
            ))}
        </TableBody>
    </Table>
))
