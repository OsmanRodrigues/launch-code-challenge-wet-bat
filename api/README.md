# api

## Setup and running

To run this api server and databases on development environment, you'll need:
- `Yarn` >= v1.22.5
- lastest versions of `docker` and `docker compose`
- `node` >= v16.

Before all, you'll need make an copy of the `.env.default` file in this dir, fill in and renaming this to `env.development`. After that, you should be able to run these commands listed below:

- nvm

If you have installed Node Version Manager - nvm, you can run this command to use the project current node version: `nvm use`

- packages installation

`yarn` or `yarn install`

- build

`yarn build`

- start development server

Run the command below and the app should run on the port defined in `.env.production` file.

`yarn dev`

- start development database

To run the development db in an docker container, use the command below. You must be defined a `.env.development` file in `db` directory.

`yarn docker-up-db-dev`

- migrations

Run the command below and the detabase schemas setup will start. You must have a development database up.

`yarn migrate-dev`

To redo the migrations, run:

`yarn migrate-down-dev`

- seeds

Run the command below to seed data throught development database. You must have a development database up.

`yarn seed-dev`


## Routes

### Quote

#### GET
- `/quote` => return an list of quotes infos
- `/quote/:id` => return a especific quote infos

#### POST
- `/quote/:id` => create a new quote
  - body :
```ts
    {
        departureLocation: string
        destinationLocation: string
        departureDate: timestamp with tz
        returnDate: timestamp with tz
        peopleContact: string
        peopleCount?: number (default value: 1)
        transportationType?: string ('bus' | 'car')
        statusCurrent?: string ('pending' | 'approved')
    }
```
