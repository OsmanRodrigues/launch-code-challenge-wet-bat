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
    statusCurrent?: keyof typeof QuoteStatus
}

export interface QuoteDataModel extends QuoteViewModel {
    id?: number
}
