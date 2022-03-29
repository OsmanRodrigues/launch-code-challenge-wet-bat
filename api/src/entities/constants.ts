export enum QuoteStatus {
    pending = 'pending',
    approved = 'approved'
}
export enum QuoteTransportationType {
    bus = 'bus',
    car = 'car'
}
export enum TableName {
    quote = 'quote'
}
export const quoteViewFields = [
    'id',
    'departureLocation',
    'destinationLocation',
    'departureDate',
    'returnDate',
    'peopleCount',
    'transportationType',
    'peopleContact',
    'statusCurrent',
    'priceFinal',
]
export const quoteDataFields = [
    ...quoteViewFields,
    'sysId',
    'createdAt',
    'updatedAt'
]
