# Snack Shop Client

Welcome to your **Snack Shop**, the place where you buy a Coxinha and still get rewarded for!

The project was made with **Typescript** a programming language that is like **Javascript** with type and steroids and using **React** lib to build our frontend. We made **tests** all over the **components**, used **Lint** to write perfect code in a **standard style** and to share the same **standard** among all developers. We also used **git hooks** to don't let any code be committed without pass in the **tests** and **lint** verification. We made a **storybook** to see, organize and share all of our components, scripts to **automatize components creation** using a template that we created, made a **Theme** to make easy to change most of the **colors** and **styles** that are shared and repeated all over the application. And last, but not least, setup a **CI/CD** with to **test** and **deploy** the **frontend** and its **storybook**. Let's get into it.



**Frontend Application**: https://iachallenge.phillrocha.com/

**Storybook**: https://sb.iachallenge.phillrocha.com/



## Techs and Stuff

* **Typescript** as programming language.
* **React** as frontend lib using all most recent features like **React Hooks and React Context API**.
* **EsLint, Editorconfig** and **Prettier** to check code inconsistence and to use and forcing the same code standard style for all the crew.
* **Husky** as a git hook, to run pre-commits scripts and check if everything is ok in the code with tests and lint.
* **Styled-components** as our CSS in JS.
* **Plop** to help automatize the components creation. We made templates for that run. Run with `yarn generate ComponentName` and it will generate.
* **Jest** as our test framework.
* **Docker** to make everything runs in your machine like in mine, makes easy to setup your environment.



## Dev Setup

### Docker environment setup

You need to have **docker** and **docker-compose**.

```shell
docker-compose up
```

After that just check your application in the respective port!

**Client**: http://localhost:3000

**Storybook**: [http://localhost:6006](http://localhost:6006)

### Regular environment setup

You will need some requirements like **NodeJS** LTS Version.

**NPM**:

```sh
# Install dependencies
npm i

# Run project
npm run start

# Run Storybook
npm run storybook

# Or Running both
make dev
```

**Yarn:**

```shell
# Install dependencies
yarn

# Run project - Port 3000
yarn start

# Run Storybook - Port 6006
yarn storybook

# Or Running both
make dev
```

After that you can access your application on the respective port!



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn lint`

Run a lint check all over the `src` files and throw an error if find something wrong.\

### `yarn generate`

Create a component in your `src/component` folder with base code in`index.tsx`, `style.ts`, `tests.tsx` and `stories.tsx` files.

### `yarn storybook`

Run a **storybook** for all shared components in project. You can preview, control and change some props there, interact and export code.

Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn build-storybook`

Builds the **Storybook** for production to the `storybook-static` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your storybook app is ready to be deployed!

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
