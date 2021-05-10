# Description of this Test Project

This project contains both frontend and backend of simple app to filter user profile based on age and gender.

## Running the Project

To run either frontend or backend, go to the respective folders and run:

### `npm start`

The frontend is accesible via [http://localhost:3000](http://localhost:3000).

The backend port has been reassigned to port 4000. Hence, it is accesible via [http://localhost:4000](http://localhost:4000).

To run test on frontend, go to the frontend folder and run:

### `npm test`

## Improvements

The backend now serves data in JSON format instead of serving the whole HTML page. The newly-created frontend presents the data in a more functional and visually appealing way.

Previously, the app is capable of filtering the data in only one of the two categories available. With the addition of the frontend infrastructure involving React and Redux, data can be presented as a combination of available categories (`gender` and `age`).

This iteration takes into consideration the potential pitfall of inundating backend with incoming data requests. To minimise the traffic, data is only requested once; the filtering operations are performed on the cached data.

We are aware that data cached in the frontend may be outdated soon. The plan (to be implemented in the future) is to use graphQL for the backend and make use of subscription service to notify client browser when there is data update, to ensure that the app user can work with the latest data without overloading the server.

Unit tests are also added using Jest and Enzyme to some section of code. The coverage may not be extensive here, but hopefully it can provide a glimpse of TDD practice that can be applied on this project.