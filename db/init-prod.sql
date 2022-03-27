CREATE DATABASE db_dev;

\c db_dev

CREATE TABLE quote (
    id SERIAL PRIMARY KEY,
    sys_id character varying(255) NOT NULL UNIQUE,
    departure_location character varying(255) NOT NULL,
    destination_location character varying(255) NOT NULL,
    departure_date timestamp with time zone NOT NULL,
    return_date timestamp with time zone NOT NULL,
    people_count integer DEFAULT 1 NOT NULL,
    transportation_type character varying(255) DEFAULT 'bus' NOT NULL,
    people_contact character varying(255) NOT NULL,
    status_current character varying(255) DEFAULT 'pending' NOT NULL,
    price_final numeric(7, 2) NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
