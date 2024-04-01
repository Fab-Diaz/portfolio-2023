# Fabien Diaz - Portfolio

[Check portfolio](https://fabiendiaz.com/)

This is a basic Fabien Diaz - Portfolio project that includes the following dependencies:

- TypeScript
- Jest
- Eslint
- Prettier
- Fp-ts
- React
- Material UI v.5
- Storybook

Basic structure:

```
/public
	/static
	    /images
	    /videos
/src
	/components
	    /common
	        /Flex
	            /__snapshots__
	            Flex.stories.tsx
                    flex.test.tsx
                    flex.styles.tsx
                    Flex.tsx
                    index.tsx
	        ...
	/context
	/hooks
	/lib
	/pages
	    _app.tsx
	    index.tsx
	/styles
	    theme.ts
	    ...
	/types
	/utils
```

# Getting Started with Create React App

This project was bootstrapped with [Create Next App](https://nextjs.org/docs).

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://jestjs.io/docs/getting-started) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles Next in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is built to generate static HTML files and ready to be deployed!

See the section about [deployment](https://nextjs.org/docs/deployment) for more information.

### `yarn storybook`

Run storybook with all components.

See the section about [Storybook](https://storybook.js.org/docs/react/get-started/introduction) for more information

### `yarn lint:fix` - `yarn format`

Scans your code with the goal of finding and fixing issues that can lead to bugs or inconsistencies with code health and style

If you do not wish the scan to automatically fix your issues, use `yarn lint` along with `yarn prettier`

## Learn More

To learn Nextjs, check out the [Nextjs documentation](https://nextjs.org/docs).

To learn Typescript, check out the [Typescript documentation](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).
