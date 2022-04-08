import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { useForm } from 'react-hook-form'
import {
    Box, Button, Card, Form, IInputComposedOption, InputComposed, Separator
} from '../../../shared'
import { quickQuoteFormInfos } from './constants'
import { QuoteViewModel } from '@entities/quote'
import { QuoteTransportationType } from '@entities/constants'
import { QuoteStore, quoteStore } from '@domain/quote-domain/quote-store'

const transportationTypeOptions = Object
    .keys(QuoteTransportationType)
    .map<IInputComposedOption>(key => ({
        id: key, value: key, title: key
    }))

interface IQuickQuoteForm {
    store?: QuoteStore
}

export const QuickQuoteForm: FC<IQuickQuoteForm> = observer(({store = quoteStore}) => {
    const { formId, section, input, buttonSubmit } = quickQuoteFormInfos

    const { register, handleSubmit, formState: { errors } } = useForm<QuoteViewModel>()
    const onSubmit = (data: QuoteViewModel) => {
        const newQuote: QuoteViewModel = {
            ...data,
            departureDate: new Date(data.departureDate).toISOString(),
            returnDate: new Date(data.returnDate).toISOString()
        }

        store.createQuote(newQuote, {
            onSucess: () => {
                const shoouldRefreshList = confirm(
                    'Quote created Successfuly. Refresh the pending quotes list?'
                )
                if(shoouldRefreshList) store.getQuotes()
            },
            onFail: (err) => {
                alert(`Create quick quote failed. ${err?.message || '' }`)
            }
        })
    }

    return (
        <Form autoComplete='off' id={formId} onSubmit={handleSubmit(onSubmit)}>
            <Card fluid>
                <Box
                    as="fieldset"
                    form={formId}
                    name={section.quoteLocations}
                    fluid
                    horizontal
                >
                    <InputComposed
                        register={register}
                        id={input.departureLocation.id}
                        name={input.departureLocation.id}
                        title={input.departureLocation.title}
                        formId={formId}
                        errors={errors}
                        required
                    />
                    <Separator vertical />
                    <InputComposed
                        register={register}
                        id={input.destinationLocation.id}
                        name={input.destinationLocation.id}
                        title={input.destinationLocation.title}
                        formId={formId}
                        errors={errors}
                        required
                    />
                </Box>
                <Separator />
                <Box
                    as="fieldset"
                    form={formId}
                    name={section.quoteDates}
                    fluid
                    horizontal
                >
                    <InputComposed
                        register={register}
                        type="datetime-local"
                        id={input.departureDate.id}
                        name={input.departureDate.id}
                        title={input.departureDate.title}
                        formId={formId}
                        errors={errors}
                        required
                    />
                    <Separator vertical />
                    <InputComposed
                        register={register}
                        type="datetime-local"
                        id={input.returnDate.id}
                        name={input.returnDate.id}
                        title={input.returnDate.title}
                        formId={formId}
                        errors={errors}
                        required
                    />
                </Box>
                <Separator />
                <Box
                    as="fieldset"
                    form={formId}
                    name={section.quotePeopleAndTransport}
                    fluid
                    horizontal
                >
                    <InputComposed
                        register={register}
                        type="number"
                        id={input.peopleCount.id}
                        name={input.peopleCount.id}
                        title={input.peopleCount.title}
                        formId={formId}
                        errors={errors}
                    />
                    <Separator vertical />
                    <InputComposed
                        register={register}
                        type="select"
                        options={transportationTypeOptions}
                        id={input.transportationType.id}
                        name={input.transportationType.id}
                        title={input.transportationType.title}
                        formId={formId}
                        errors={errors}
                    />
                </Box>
                <Separator />
                <Box
                    as="fieldset"
                    form={formId}
                    name={section.quoteContactAndSubmit}
                    fluid
                    horizontal
                >
                    <InputComposed
                        register={register}
                        id={input.peopleContact.id}
                        name={input.peopleContact.id}
                        title={input.peopleContact.title}
                        formId={formId}
                        errors={errors}
                        required
                    />
                    <Separator vertical />
                    <Box position="center" fluid>
                        <Button type="submit" typeStyle="callToAction" form={formId}>
                            {buttonSubmit}
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Form>
    )
})
