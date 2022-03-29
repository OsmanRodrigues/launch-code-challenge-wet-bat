import { Knex } from 'knex'
import { config as configUtils } from '../src/utils/config'

const env = configUtils.env

export async function up(knex: Knex): Promise<void> {
    const hastable = await knex.schema.hasTable(env.DB_QUOTE_TABLE_NAME)

    if (!hastable) {
        return knex.schema
            .createTable(env.DB_QUOTE_TABLE_NAME, table => {
                table
                    .increments('id').primary()
                table
                    .string('sys_id').notNullable().unique()
                table
                    .string('departure_location').notNullable()
                table
                    .string('destination_location').notNullable()
                table
                    .timestamp(
                        'departure_date',
                        {useTz: true})
                    .notNullable()
                table
                    .timestamp(
                        'return_date',
                        {useTz: true})
                    .notNullable()
                table
                    .integer('people_count')
                    .defaultTo(1)
                    .notNullable()
                table
                    .string('transportation_type')
                    .defaultTo('bus')
                    .notNullable()
                table
                    .string('people_contact').notNullable()
                table
                    .string('status_current')
                    .defaultTo('pending')
                    .notNullable()
                table
                    .decimal('price_final', 7, 2)
                    .notNullable()
                table
                    .timestamps(true, true)
            })
    }
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists(env.DB_QUOTE_TABLE_NAME)
}

