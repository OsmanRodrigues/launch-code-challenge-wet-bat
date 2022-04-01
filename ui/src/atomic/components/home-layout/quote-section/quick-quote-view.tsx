import { CardWithActions } from '../../common-layout'
import { FC } from 'react'
import { QuickQuoteForm } from './quick-quote-form'

export const QuickQuoteView: FC = () => {
    return (
        <CardWithActions iconMain={'Fastfoward'} title='Quick quote'>
            <QuickQuoteForm/>
        </CardWithActions>
    )
}
