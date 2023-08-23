
This project is the answer for the frontend coding challenge with the requirements explained here (https://github.com/axpogroup/hiring-challenges/tree/main/frontend-engineer-drone-challenge)

## Technologies used

`typescript` to enhance javascript.\
`react` as a frontend framework to achieve a single page application.\
`react-router-dom` for routing.\
`axios` for fetcinh the data.\
`styled-components` for styling and theming of the application.\
`material ui` to display tabular data, allowing sorting and pagination.\
`react-json-view-lite` to display the data obtained from the API provided, in a JSON format.\
`jest` for testing.\

Specific versions and modules can be found in `package.json`

## Approach
After understanding what needed to be done, design the different URLs and pages of the app. In this case `start-page`, `table-data-page`, and `results-page`.\
Next, created a functional version of the app without focusing on style.\
And then added the style, trying to componentize and reuse as much as possible.\
After having the application almost finished added tests. In this case, there are not covering the entire app because the development time was getting out of the frame advised in the requirements.\
For test building, I tried to cover the pages and the user interaction with them, without testing each component independently.\

For more info about the process commits history can be checked.

## Start the server
Clone the repo `git clone https://github.com/AmeliaRabanillo/axpo-frontend-challenge.git` \
Run `npm install`\
Run `npm start`