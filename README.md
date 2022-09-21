# Github Repo Explorer

This project has been created using Github GRAPHQL API to explore repositories. It's been using some main tools like:

- ReactJS
- Typescript
- GraphQL (Apollo client)
- Chakra UI
- Testing Library

It's been automatically linting (based on the ESlint rules) staged files because of `lint-staged`. You can
check `.lintstagedrc.json` in case you
want to modify its rules.
It's been using Prettier to format codebase as well.

## Environment Variables

There is a `.env.example` demonstrating how to set API url:

```dotenv
REACT_APP_API_URL=https://website.com/graphql
REACT_APP_API_TOKEN=abcdefGHiJkLmNOPQr
```

Just rename it to `.env` and change the values.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using a Typescript
template (`--template typescript`)

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
