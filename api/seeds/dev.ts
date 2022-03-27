import { Knex } from 'knex'
import { QuoteModelFactory } from '../src/entities'

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex.raw(`TRUNCATE TABLE "${QuoteModelFactory.tableName}" CASCADE`)

    const quote = new QuoteModelFactory()

    // Inserts seed entries
    await knex(QuoteModelFactory.tableName).insert([
        quote.build({
            departureDate: '2004-10-19 10:23:54+02',
            departureLocation: 'recife',
            destinationLocation: 'sao paulo',
            peopleContact: 'me',
            priceFinal: 150.32,
            returnDate: '2004-10-20 10:23:54+02'
        }),
        quote.build({
            departureDate: '2005-11-19 10:23:54+02',
            departureLocation: 'sao paulo',
            destinationLocation: 'new york',
            peopleContact: 'me',
            priceFinal: 550.45,
            returnDate: '2006-01-21 10:23:54+02',
            peopleCount: 5,
            statusCurrent: 'approved',
            transportationType: 'car'
        })
    ])
};
