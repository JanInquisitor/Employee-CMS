const inquirer = require('inquirer');
const questions = require('./questions')
const departmentController = require('./departmentController')
const employeeController = require('./employeeController')
const roleController = require('./roleController')

class MenuInterface {

    static async startPrompt() {
        try {
            const answers = await inquirer.prompt(questions.menuActions())
            const action = answers.action

            if (action === 'View all departments') {
                console.log("You selected view all departments")
            }

            if (action === 'View all employees') {
                // Place holder
            } else if (action === 'Add a department') {
                // Place holder
            } else if (action === 'Add a department') {
                await departmentController.addDepartment()
            } else if (action === 'Add a role') {
                await roleController.addRole()
            } else if (action === 'Add an employee') {
                await employeeController.addEmployee();
            } else if (action === 'Update an employee role') {

            } else {
                console.log('Goodbye.');
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