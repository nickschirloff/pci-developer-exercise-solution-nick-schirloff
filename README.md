# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## PCI Energy Solutions - Developer Exercise Solutions

### My Notes per Task

1. We could also set the title in index.html, but I assumed this would be a page within a greater application, and the name for the full application would be best suited for that role.
2. Since the near-earth-asteroids.json stores numbers as strings, we have to filter based on the value converted to a number. Otherwise, we will get inconsistencies when using the default filter (e.g. searching for 'equal to' returns no value). I defined my own filter option, numericStringColumnFilter, to solve this, along with some basic functions to demo it. A similar situation is encountered with sorting, and I have implemented a few custom functions for the comparator function.  
3. Added formatting to make date appear in YYYY-MM-DD format, which in my opinion, reduces ambiguity between countries that use mm-dd-yyyy vs. dd-mm-yyyy format. Also a personal preference, as it is the same format as SQL databases.
4. Added simple valueGetter field to convert cell value.
5. This task I was not able to complete. Upon looking at the documentation, the capabilities of selecting rows and pasting into programs like Excel are locked behind the enterprise version of AG Grid, which I of course only have the community version of. From the looks of it, we just need to add the 'cellSelection' and 'copyHeadersToClipboard' props (both booleans) to AgGridReact component to achieve such capabilities. Adding the props is allowed, but the console prints out an error detailing the required library.
```
    <AgGridReact
        rowData={data}
        columnDefs={neoGridColumns}
        cellSelection
        copyHeadersToClipboard
    />
```
6. Added simple button to clear filters. Used a ref to the grid to reset column state and clear set filters.