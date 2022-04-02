# launch-code-challenge-wet-bat

### More docs

<a href="./api/README.md">api</a> | <a href="./ui/README.md">ui</a>

## Views

### Home
![image](https://user-images.githubusercontent.com/55052153/161351588-e50992be-02fa-4a1a-9c55-970bfb7d002e.png)

## Quotes details
![image](https://user-images.githubusercontent.com/55052153/161351655-73eaf958-46a0-4516-8b5e-2fb63bb25f0f.png)


## Setup and running

To run this fullstack app locally, you'll need:
 - `Yarn` >= v1.22.5
 - lastest versions of `docker` and `docker compose`
- `node` >= v16, in order to run the services individually.

Before all, you'll need make copies of the `.env.default` files in all subdirs (`api`, `db`, `ui`), fill in and renaming them to `env.production`. After that, go to `root dir` and run sequentially:

1. build:

Run the command below and await the build proccess (must take few minutes)
   - `yarn build`

2. start:

Run one of the command below and await the start proccess (must be very fast). The app should run on the `port 3000` or the one defined in `.env` files.
   - `yarn start` or `yarn start-silent`

3. stop:

Run the command below to stop the app and down the containers (must be very fast)
   - `yarn stop`


## Current features

- [x] Create quick quote
- [x] Pending quotes visualization
- [x] Quick quote form custom styles
- [x] Pending quote visualization
- [x] Docs updates (v1)


## Foundations

### Business

Wet Bat is a web app that aims users who works in travel companies which wants get and manage quick quotes.

### Database

This section give us a visual percepetion of main database entity and their properties.

<div style="display: flex; justify-content: center;">
    <img src="./docs/assets/wetbat-database.png" style="border-radius: 8px;"/>
</div>

### Assets

This app operations is distributed through these assets below.

<div style="display: flex; justify-content: center;">
    <img src="./docs/assets/wetbat-assets.png" style="border-radius: 8px;"/>
</div>

### Architecture

All the assets, excepts database, are based in Clean Architecture, following the Dependency Rule: <i>"source code dependencies can only point inwards"<i>.

<div style="display: flex; justify-content: center;">
    <img src="https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg" style="border-radius: 8px;" />
</div>

### More docs

<a href="./api/README.md">api</a> | <a href="./ui/README.md">ui</a>



