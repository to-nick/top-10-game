The Top Ten Game
_____________________________________________________________________________________________________________
PROJECT OVERVIEW

An interactive, turn based, quiz game where players try to guess the "top 10" list of a defined category.
Players can choose from a specified category of top ten lists or be given a random category.
Players score one point by succesfully guessing an item within the list. The player with the hightest 
score at the end of the game is the winner.
______________________________________________________________________________________________________________
FEATURES

-Multiplayer or single player: Users can compete against their friends on the same device or play solo.
-Dynamic quiz questions: Fetched from a MySQL database with an API.
-Real time and dynamic display of scores: Players can see their scores in real time.
-Personalisation: Players can enter their names to have them displayed next to their scores.
-Responsive design for a large number of screen sizes.
______________________________________________________________________________________________________________
INSTALLATION

1. Clone the repository:
    git clone https://github.com/to-nick/top-10-game.git

2. Navigate to the project directory:
    cd top-10-game

3. Install the dependacies from both directories:
    cd Top-10-Frontend
    npm install
    cd ..
    cd Top-10-Server
    npm install

4. Create a database:
    Install MySQL and MySQL workbench and create a database using the the query from "InitialQuery.sql" in the backend directory.

4. Set up the environmental variables:
    View the "ENVexample" file in the server dierctory and create your own enviromental variables.

5. Run the app:
    - Ensure you are in the frontend directory "cd Top-10-Frontend"
    - Then "npm run dev" for development which should run both the front and backend with concurrently.

________________________________________________________________________________________________________________
TECH STACK

## Frontend
    -HTML5, CSS3, Javascript
    -React (For dynamic UI components and visualisations)

## Backend
    -Node.js
    -Express.js
    -Knex (For connecting the server to the database)

## Database
    -MySQL (For storing quiz questions to be fetched by an API)

_________________________________________________________________________________________________________________
API DOCUMENTATION

## TOP 10 LIST ACCESS
- GET /lists/random-list     // For randomly generated lists
- GET /lists/category        // For generating the category list
- GET /lists/category-list   // For generating a list from a defined category

## CONTACT
- POST /contact/send-email   // For using the contact form to generate an email