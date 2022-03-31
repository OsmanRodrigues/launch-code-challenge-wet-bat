import { FC } from 'react'
import { QuickQuoteForm } from './quick-quote-form'
import { QuoteView } from './quote-view'

export const QuickQuoteView: FC = () => {
    return (
        <QuoteView iconMain={'Fastfoward'} title='Quick quote'>
            <QuickQuoteForm/>
        </QuoteView>
    )
}
