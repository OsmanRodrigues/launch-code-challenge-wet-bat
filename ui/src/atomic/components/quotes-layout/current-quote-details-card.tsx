import { DL, DT, Separator, DD, Box } from '@atomic/shared'
import { QuoteDataModel } from '@entities/quote'
import { FC } from 'react'

interface ICurrentQuoteDetailsCard {
    quote: QuoteDataModel
}

export const CurrentQuoteDetailsCard: FC<ICurrentQuoteDetailsCard> = ({ quote }) => (
    <DL fluid>
        <Box horizontal fluid>
            <DT isBolded>status:</DT>
            <Separator vertical />
            <DD>{quote.statusCurrent}</DD>
            <Separator vertical large />
            <DT isBolded>price:</DT>
            <Separator vertical />
            <DD>$ {quote.priceFinal}</DD>
        </Box>
        <Box horizontal fluid>
            <DT isBolded>contact:</DT>
            <Separator vertical />
            <DD>{quote.peopleContact}</DD>
            <Separator vertical large />
            <DT isBolded>people:</DT>
            <Separator vertical />
            <DD>{quote.peopleCount}</DD>
        </Box>
        <Box horizontal fluid>
            <DT isBolded>departure:</DT>
            <Separator vertical />
            <DD>{new Date(quote.departureDate).toUTCString()}</DD>
            <Separator vertical large />
            <DT isBolded>location:</DT>
            <Separator vertical />
            <DD>{quote.departureLocation}</DD>
        </Box>
        <Box horizontal fluid>
            <DT isBolded>return:</DT>
            <Separator vertical />
            <DD>{new Date(quote.returnDate).toUTCString()}</DD>
            <Separator vertical large />
            <DT isBolded>location:</DT>
            <Separator vertical />
            <DD>{quote.destinationLocation}</DD>
        </Box>
        <Box horizontal fluid>
            <DT isBolded>transportation:</DT>
            <Separator vertical />
            <DD>{quote.transportationType}</DD>
        </Box>
    </DL>
)
