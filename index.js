// All the imports.
const MenuInterface = require('./src/menuInterface')
const databaseConnection = require('./db/connectionDb')

// Main function that runs the program.
function main() {
    let dbConnection = databaseConnection()
    MenuInterface.startPrompt(dbConnection)
}

// Starts the program by running the main function.
main();


// Development steps
// 1- Make classes and the creation and handling of the classes' functionality ✅
// 2- Develop more the menu interface and the display of current classes and objects(like employees and departments) and
// of course the creation of the classes. Each department, role and employee will have their own file controller with
// all their functionalities inside. ✅

// 3- Create database and the connection.
// 4- Work on the sql queries and tables and their relations.