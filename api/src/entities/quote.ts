import { randomUUID } from 'crypto'
import { Model } from 'objection'
import { AbstractFactory } from './abstract-factory'
import { QuoteStatus, QuoteTransportationType, TableName } from './constants'

export interface QuoteViewModel {
    departureLocation: string | unknown,
    destinationLocation: string | unknown,
    departureDate: string | unknown,
    returnDate: string | unknown,
    peopleCount?: number,
    transportationType?: keyof typeof QuoteTransportationType,
    peopleContact: string | unknown,
    statusCurrent?: keyof typeof QuoteStatus,
    priceFinal: number | unknown,
}

export interface QuoteDataModel extends QuoteViewModel {
    id?: string,
    sysId: string | unknown
}

export class QuoteModelFactory extends Model implements AbstractFactory<QuoteViewModel, QuoteDataModel> {

    private $builtObject: QuoteDataModel = {
        sysId: null,
        departureLocation: null,
        destinationLocation: null,
        departureDate: null,
        returnDate: null,
        peopleCount: 1,
        transportationType: QuoteTransportationType.bus,
        peopleContact: null,
        statusCurrent: QuoteStatus.pending,
        priceFinal: null
    }

    build(params: QuoteViewModel): QuoteDataModel {
        const builtObjectCopy = { ...this.$builtObject }

        builtObjectCopy.sysId = randomUUID()
        Object.keys(params).forEach(key => { builtObjectCopy[key] = params[key] })
        this.$builtObject = builtObjectCopy

        return builtObjectCopy
    }

    static get tableName() {
        return TableName.quote
    }

    get currentBuilt(): QuoteDataModel {
        return this.$builtObject
    }

}
