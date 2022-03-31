# launch-code-challenge-wet-bat

To run this fullstack app locally, you'll need:
- `node` >= v16
 - `Yarn` >= v1.22.5
 - lastest versions of `docker` and `docker compose`

### Commands

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

Complete docs on the way!

Thanks and seeya!
