## `Libraries used`

### `react-router-dom`
Allows you to handle routes in a web app

### `redux`
Redux is a predictable state container for JavaScript apps.

Redux makes it easy to manage the state of your application. Another way of looking at this - it helps you manage the data you display and how you respond to user actions.

### `redux-thunk`
Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

### `uuid`
Generated unique key everytime call called.

### `fortawesome`
Font Awesome is a font and icon toolkit based on CSS and Less.


==========================================================================================
## How to use
    1. Visit the web app https://blissful-austin-ef64a9.netlify.app/, you will see the   welcome screen if you are not loggedin.
    2. Fill the quiz form
        a) Choose the number of questions
        b) Choose the category
        c) Choose the difficulty level for the test
        d) Choose the type of questions
        d) Start the test
    3. Attemped the test
        a) Click on the options, your choice will be saved
        b) You can move back and forth using next and prev button
        c) End the test
    4. Last submission
        a) You will be redirected to this page to show you score
        b) You can any time see your last score (info is stored in localstorage)





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!