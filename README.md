# launch-code-challenge-wet-bat

### Views

#### Home
![image](https://user-images.githubusercontent.com/55052153/161160205-6ef54314-eed5-4d80-a595-d5dca5b9f18e.png)

### Setup and running

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


### Current features

- [DONE] Create quick quote
- [DONE] Pending quotes visualization
- [DONE] Quick quote form custom styles
- [DOING] Pending quote visualization and management

More Complete docs on the way!

Thanks and seeya!


