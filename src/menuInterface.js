const inquirer = require('inquirer');
const questions = require('./questions');
const departmentController = require('./departmentController');
const employeeController = require('./employeeController');
const roleController = require('./roleController');
const consoleMessages = require('./utils/consoleMessages');

class MenuInterface {

    static async startPrompt(dbConnection) {
        consoleMessages()
        try {
            const answers = await inquirer.prompt(questions.menuActions())
            const action = answers.action

            if (action === 'View all departments') {
                await departmentController.getAllDepartments(dbConnection)

            } else if (action === 'View all employees') {
                await employeeController.getAllEmployees(dbConnection);

            } else if (action === 'View all roles') {
                await roleController.getAllRoles(dbConnection)

            } else if (action === 'Add a department') {
                await departmentController.addDepartment(dbConnection);
                await MenuInterface.startPrompt(dbConnection)

            } else if (action === 'Add a role') {
                await roleController.addRole(dbConnection);
                await MenuInterface.startPrompt(dbConnection)

            } else if (action === 'Add an employee') {
                await employeeController.addEmployee(dbConnection);
                await MenuInterface.startPrompt(dbConnection)

            } else if (action === 'Update an employee role') {
                await employeeController.updateEmployeeRole(dbConnection);

            } else {
                console.log('Goodbye.');
                process.exit()
            }

        } catch (error) {
            if (error.isTtyError) {
                console.error(error.isTtyError)
            } else {
                console.error(error)
            }
        }
    }

}


module.exports = MenuInterface;