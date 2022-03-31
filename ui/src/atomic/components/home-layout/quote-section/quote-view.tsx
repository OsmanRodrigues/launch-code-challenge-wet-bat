import { Card, Box, H2, Separator, Icon, Button } from '../../../shared'
import { FC } from 'react'

interface IQuoteView {
    title: string
    handleRefresh?: () => void
}

export const QuoteView: FC<IQuoteView> = props => {
    return (
        <Card fluid>
            <Box fluid>
                <Box horizontal fluid>
                    <Box fluid>
                        <H2 color="secondary">{props.title}</H2>
                    </Box>
                    {props.handleRefresh ?
                        <Box position='end' fluid horizontal>
                            <Button typeStyle='icon' onClick={props.handleRefresh}>
                                <Icon.Refresh />
                            </Button>
                        </Box>
                        : null}
                </Box>
                <Separator outlined />
                {props.children}
            </Box>
        </Card>
    )
}
