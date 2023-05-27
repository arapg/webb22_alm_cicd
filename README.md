# webb22_alm_cicd

## Application Lifecycle Management Final Assignment
This project was set up with express-generator and features a simple calculator API, so far with two endpoints: `/add?val=1&val=2` and `/sub?val=1&val=2`. To make sure the code follows the right standards, ESLint and Husky were used for linting and pre-commit hooks. 

## Getting started

Make sure you have the latest version of Node installed before cloning the repository. To check what version you have simply type `node -v` in the terminal. To install the latest version you can type `npm install npm@latest -g`. 

1. Now that you've made sure you have the latest version of Node, clone the repository to your own local machine.

2. Navigate to the project directory with `cd your/path/webb22_alm_cicd` and install the dependencies with `npm install`.

## Available scripts

- `npm start`: Starts the project application
- `lint`: Checks code style with ESLint
- `lint-fix`: Attempts to automatically fix lint errors 
- `prepare`: Automatically enabled Git hooks with Husky
- `test`: Runs tests with mocha

## Husky

To use Husky in your own projects, you can follow these steps. More information can be found on their [official documentation](https://typicode.github.io/husky/getting-started.html).

1. Install husky
`npm install husky --save-dev`

2. Enable Git hooks
`npx husky install`

3. Edit package.json to automatically have Git hooks enabled after install. This can either be done in your code editor by adding `"prepare": "husky install"` under `scripts`, or by running:
`npm pkg set scripts.prepare="husky install"

### Creating hooks

You can add pre-commit hooks by running 
`npx husky add .husky/pre-commit "[your script]"`

In this project there's two pre-commit hooks, `npm test` and `npm run lint`. What this means is that both `npm test` and `npm run lint` has to clear before the commit can be made. 

To bypass Husky, you run the following:
`git commit -m "relevant commit message" --no-verify`