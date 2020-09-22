# Smart Datatable

A React app that displays all the list of features in a grid with the abiilities of search, filter, sort and editing the relavant items

## Project Structure
* Created with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html)
* The main App.js component is located in `src/App.js`
* The sub comoponets are located in `src/components`
    1. Features - The main Features component page
    2. FeaturesGrid - The Features grid/table component
    3. GridOptions - Holds the configuration for the grid built-in options
* The component uses a custom hook `src/hooks` for fetching the `lib` data

* I used the following additional packages:
    1. `material-ui` for UI library
    2. `mui-datatables` for table/grid data display and functionallity 
    3. `delay` delay a promise a specified amount of time
* Things I didnt have time to implement
    4. `styled-components` for custom styling css
    5. `react-virtualized` handling inifinte scroll for large sets of data

## Local Installation & Setup
Clone this repository. You will need npm/yarn installed globally on your machine.

All commands run from project root:
1. `npm install`
2. `npm start`
6. Visit http://localhost:3000
7. Have fun!
