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