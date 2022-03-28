import { randomUUID } from 'crypto'
import { Model } from 'objection'
import { AbstractFactory } from './abstract-factory'
import { QuoteStatus, QuoteTransportationType, TableName } from './constants'

export interface QuoteViewModel {
    id?: string,
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
    sysId: string | unknown
    updatedAt?: string,
    createdAt?: string
}

export class QuoteModelFactory extends Model implements AbstractFactory<QuoteViewModel, QuoteDataModel> {

    private $builtObject: QuoteViewModel = {
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
        const builtDTO = { ...this.$builtObject }

        Object.keys(params).forEach(key => { builtDTO[key] = params[key] })
        this.$builtObject = builtDTO

        return Object.assign(builtDTO, { sysId: randomUUID() })
    }

    static get tableName() {
        return TableName.quote
    }

    get currentBuilt(): QuoteViewModel {
        return this.$builtObject
    }

}
