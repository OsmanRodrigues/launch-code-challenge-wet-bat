import { QuoteStatus, QuoteTransportationType } from './constants'

export interface QuoteViewModel {
    departureLocation: string
    destinationLocation: string
    departureDate: string
    returnDate: string
    peopleContact: string
    priceFinal: number
    peopleCount?: number
    transportationType?: keyof typeof QuoteTransportationType
}

export interface QuoteDataModel extends QuoteViewModel {
    id: number
    statusCurrent: keyof typeof QuoteStatus
}
