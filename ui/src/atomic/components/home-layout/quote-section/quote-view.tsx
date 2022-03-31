import { Card, Box, H2, Separator } from '@atomic/shared'
import { FC } from 'react'

interface IQuoteView {
    title: string
}

export const QuoteView: FC<IQuoteView> = props => {
    return (
        <Card disableInteractivity fluid>
            <Box fluid>
                <H2 color="secondary">{props.title}</H2>
                <Separator outlined />
                {props.children}
            </Box>
        </Card>
    )
}
