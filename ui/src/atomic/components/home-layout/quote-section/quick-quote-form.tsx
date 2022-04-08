import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
    Box, Button, Card, Form, IInputComposedOption, InputComposed, Separator
} from '../../../shared'
import { quickQuoteFormInfos } from './constants'
import { QuoteViewModel } from '@entities/quote'
import { QuoteTransportationType } from '@entities/constants'
import { useMutateQuote } from '@adapters/mutation'
import { useQueryQuote } from '@adapters/query'

const transportationTypeOptions = Object
    .keys(QuoteTransportationType)
    .map<IInputComposedOption>(key => ({
        id: key, value: key, title: key
    }))

interface CreateResponse {
    message: string
    action: string
}

export const QuickQuoteForm: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<QuoteViewModel>()
    const [{data, error, loading}, {mutate,mutateCMS}] = useMutateQuote()
    const {refresh} = useQueryQuote('filter=pending')[1]

    const { formId, section, input, buttonSubmit } = quickQuoteFormInfos

    useEffect(() => {
        if (data?.action === 'create') {
            const shouldRefreshList = confirm(
                `${data.message} Refresh the pending quotes list?`
            )
            if (shouldRefreshList) refresh()
        }
    }, [data?.action, data?.message, refresh])

    const onSubmit = (data: QuoteViewModel) => {
        const newQuote: QuoteViewModel = {
            ...data,
            departureDate: new Date(data.departureDate).toISOString(),
            returnDate: new Date(data.returnDate).toISOString()
        }
        mutateCMS('create',newQuote)
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
                        <Button type="submit" typeStyle="callToAction" form={formId} disabled={loading}>
                            {buttonSubmit}
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Form>
    )
}
