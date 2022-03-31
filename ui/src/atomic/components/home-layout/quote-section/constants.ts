import { QuoteViewFields } from '@entities/constants'

export const quickQuoteFormInfos = {
    formId: 'QuickQuoteForm',
    buttonSubmit: 'Create a quote',
    section: {
        quoteLocations: 'quoteLocations',
        quoteDates: 'quoteDates',
        quotePeopleAndTransport: 'quotePeopleAndTransport',
        quoteContactAndSubmit: 'quoteContactAndSubmit'
    },
    input: {
        [QuoteViewFields.departureLocation]: {
            id: QuoteViewFields.departureLocation,
            title: 'From'
        },
        [QuoteViewFields.destinationLocation]: {
            id: QuoteViewFields.destinationLocation,
            title: 'Destination'
        },
        [QuoteViewFields.departureDate]: {
            id: QuoteViewFields.departureDate,
            title: 'Depart date'
        },
        [QuoteViewFields.returnDate]: {
            id: QuoteViewFields.returnDate,
            title: 'Return date'
        },
        [QuoteViewFields.peopleCount]: {
            id: QuoteViewFields.peopleCount,
            title: 'Peole count'
        },
        [QuoteViewFields.transportationType]: {
            id: QuoteViewFields.transportationType,
            title: 'Transportation'
        },
        [QuoteViewFields.peopleContact]: {
            id: QuoteViewFields.peopleContact,
            title: 'Contact'
        }
    }
}
