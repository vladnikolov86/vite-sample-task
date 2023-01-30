# Technologies used
## Vite, React, TypeScript, Node JS, Docker
### Others: styled-compomnents, react-query, react-virtualized

## Run the solution
Option1: In dev mode. Run `yarn install && yarn dev` and you will be using the dev build <br />
Option2: Using the Express JS server. Run `yarn install && yarn build` in root folder. Then navigate to server folder and run `yarn install && node index`.<br />
Option3: With docker (assuming you have it installed). Run `docker compose build && docker compose up`.<br />

### Notes
1. Added some mocking of the data to simulate a bit more items. That is why there is repetition for some the items.
2. Tests are available with `yarn test`. They are added for one of the components.