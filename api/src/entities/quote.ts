import { randomUUID } from 'crypto'
import { Model } from 'objection'
import { QuoteStatus, QuoteTransportationType, TableName } from './constants'

export interface QuoteViewModel {
    departureLocation: string,
    destinationLocation: string,
    departureDate: string,
    returnDate: string,
    peopleCount?: number,
    transportationType?: keyof typeof QuoteTransportationType,
    peopleContact: string,
    statusCurrent?: keyof typeof QuoteStatus,
    priceFinal: number,
}

export interface QuoteDataModel extends QuoteViewModel {
    id?: string,
    sysId: string
}

export class Quote extends Model implements QuoteDataModel {
    sysId = randomUUID()
    departureLocation
    destinationLocation
    departureDate
    returnDate
    peopleCount
    transportationType
    peopleContact
    statusCurrent
    priceFinal

    constructor({
        departureLocation,
        destinationLocation,
        departureDate,
        returnDate,
        peopleCount = 1,
        transportationType = QuoteTransportationType.bus,
        peopleContact,
        statusCurrent = QuoteStatus.pending,
        priceFinal,
    }: QuoteViewModel) {
        super()
        this.departureLocation = departureLocation
        this.destinationLocation = destinationLocation
        this.departureDate = departureDate
        this.returnDate = returnDate
        this.peopleCount = peopleCount
        this.transportationType = transportationType
        this.peopleContact = peopleContact
        this.statusCurrent = statusCurrent
        this.priceFinal = priceFinal
    }

    static get tableName() {
        return TableName.quote
    }
}
