import { FC } from 'react'
import { CardWithActions } from '../../common-layout'
import { QuickQuoteForm } from './quick-quote-form'

export const QuickQuoteView: FC = () => {
    return (
        <CardWithActions iconMain={'Fastfoward'} title='Quick quote'>
            <QuickQuoteForm/>
        </CardWithActions>
    )
}
