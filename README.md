# StarWarsCharacters

### Challenges

- GraphQL related
  - The graphql endpoint is not that search friendly. As per my understanding, the api does not support filter to the full extent. Ex. if you want to filter the planets based on the species.
  - graphql endpoint does not have any image data that can be used to show the character images in the UI as per the dummy design. Some other start wars api providers give an image link with the user.
  - With swapi I could not find a way to filter the planets based on the species.
  - ultimately using this swapi more over the graphql version was a pain in my opinion.

### Some important info

1. Front end technologies used are React, MaterialUI
2. Back end technologies used are Node, Express
3. The front end app is responsive for mobile and laptop screen
4. Added tests for two components (select, character card) with two different testing library (react-testing-library, enzyme)

### Some important commands to run and test the app

1. Please run `npm i` in the root folder and inside the client folder.
2. To run the app please run `npm run dev` at the root folder.
3. Visit [http://localhost:3000/](http://localhost:3000/) to see the app running
4. To run the UI tests please run `npm test` inside client folder.
5. To see the code coverate please run `npm test -- --coverage`

### Demo

#### This app is deployed on heroku. Please find below the link

[https://sarnendu-star-wars-characters.herokuapp.com/](https://sarnendu-star-wars-characters.herokuapp.com/)
