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
import { FC } from 'react'

const tableHeads = ['Id', 'Name', 'Price']
const tableData = [{
    id: 1,
    name: 'Me',
    price: 150.00
}]

export const PendingQuoteView: FC = () => {
    return (
        <Card disableInteractivity fluid>
            <Box fluid>
                <H2>Pending quotes</H2>
                <Separator outlined />
                {tableData.length ?
                    <Table>
                        <TableHeaders>
                            <TableRow key={'head'}>
                                {tableHeads.map(headData => (
                                    <TableHead key={headData}>{headData}</TableHead>
                                ))}
                            </TableRow>
                        </TableHeaders>
                        <TableBody>
                            {tableData.map(data => (
                                <TableRow key={data.id}>
                                    <TableData>{data.id}</TableData>
                                    <TableData>{data.name}</TableData>
                                    <TableData>{data.price}</TableData>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    :
                    <H4>No pending quotes info.</H4>
                }
            </Box>
        </Card>
    )
}
