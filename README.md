### Team Treehouse Full Stack JavaScript Techdegree

## Unit 7 Project: React Gallery App

**Summary:** This project uses the modern JavaScript front-end library, React, to render a photo gallery.  The photos are fetched from the Flickr API using axios.  Users can view images from one of the main topics or by conducting their own search

State is handled by React's Context API and routes are handled by React Router.  This project demonstrates my ability to utilize a modern JavaScript library and utilize best practices(code organization, state management, routes).


**How to use**:

1. Download the project files and extract the folder to your computer.
2. Open the terminal/command prompt and change directories to the project directory.
3. Run the command `npm install` to install the project's dependencies.
4. Sign up for a [non-commercial API Flickr API Key](https://teamtreehouse.com/projects/react-gallery-app).
5. Create a file named `config.js` and place it in the `src` folder.  Write this into the file.
```
const apiKey = 'YOUR_PUBLIC_KEY';
export default apiKey;  
6. Run the command `npm start` to start the app.    
7. View the project in your browser by going to [`localhost:3000`](http://localhost:3000/)


**Extra Credit**

1. JS: Loading text is displays when the app is fetching data.
2. JS: Users are shown a friendly 'no results found' message when their search returns no results.
3. JS: Users are shown a friendly 404 message when they land on a non-existent route.
4. JS: Used React Context API to handle state and avoid prop drilling.
5. JS: Used React Router, React Context, and React lifecycle methods to ensure a smooth experience.  Users can use the refresh/back/forward buttons and expect predictable results.
6. JS: Photos are loaded for the Main Topics in initial load and stored.  This way, if someone clicks on a main topic, the project grabs the stored data.  This makes for faster performance than making another get request to Flickr.
7. CSS: Customized colors, fonts, background, borders, and other minor styles.
8. JS+CSS: Used animate.css to add animations.


----


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify