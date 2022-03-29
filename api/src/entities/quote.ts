import { Model } from 'objection'
import { QuoteStatus, QuoteTransportationType, TableName } from './constants'

export interface QuoteViewModel {
    id?: number
    departureLocation: string
    destinationLocation: string
    departureDate: string
    returnDate: string
    peopleContact: string
    priceFinal: number
    peopleCount?: number
    transportationType?: QuoteTransportationType
    statusCurrent?: QuoteStatus
}

export interface QuoteDataModel extends QuoteViewModel {
    sysId: string
    updatedAt?: string
    createdAt?: string
}

export class Quote extends Model implements QuoteDataModel {

    id!: number
    sysId!: string
    departureLocation!: string
    destinationLocation!: string
    departureDate!: string
    returnDate!: string
    peopleContact!: string
    priceFinal!: number
    updatedAt!: string
    createdAt!: string
    peopleCount = 1
    transportationType = QuoteTransportationType.bus
    statusCurrent = QuoteStatus.pending

    static get tableName() {
        return TableName.quote
    }

}
