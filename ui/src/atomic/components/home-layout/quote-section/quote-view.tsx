import { Card, Box, H2, Separator, Icon, Button } from '../../../shared'
import { FC } from 'react'
import { StyledComponent } from 'styled-components'

interface IQuoteView {
    title: string,
    iconMain: keyof typeof Icon,
    handleRefresh?: () => void
}

export const QuoteView: FC<IQuoteView> = props => {
    const IconMain: StyledComponent<any, any> = Icon[props.iconMain]

    return (
        <Card fluid>
            <Box fluid>
                <Box horizontal fluid>
                    <Box fluid horizontal>
                        <IconMain />
                        <H2 color="secondary">{props.title}</H2>
                    </Box>
                    {props.handleRefresh ? (
                        <Box position="end" fluid horizontal>
                            <Button
                                typeStyle="icon"
                                onClick={props.handleRefresh}
                            >
                                <Icon.Refresh />
                            </Button>
                        </Box>
                    ) : null}
                </Box>
                <Separator outlined />
                {props.children}
            </Box>
        </Card>
    )
}
