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

INSERT INTO quote (
    sys_id,
    departure_location,
    destination_location,
    departure_date,
    return_date,
    people_count,
    people_contact,
    price_final
) VALUES
('bar', 'recife', 'sao paulo', '2022-10-19 10:23:54+02', '2022-11-19 11:00:00+02', 5, 'me', 100.50);

INSERT INTO quote (
    sys_id,
    departure_location,
    destination_location,
    departure_date,
    return_date,
    transportation_type,
    people_contact,
    status_current,
    price_final
) VALUES
('boo', 'recife', 'rio de janeiro', '2022-10-19 10:23:54+02', '2022-11-19 11:00:00+02', 'car', 'me', 'pending', 200.25);
