const inquirer = require('inquirer');
const questions = require('./questions');
const Employee = require('./classes/Employee');

let employeeController = {};

employeeController.addEmployee = async function () {
    try {
        const answers = await inquirer.prompt(questions.employeeQuestions());
        const newEmployee = new Employee(
            answers.id,
            answers.firstName,
            answers.lastName,
            answers.roleId,
            answers.managerId
        );

        console.log(newEmployee);

    } catch (error) {
        if (error.isTtyError) {
            console.error(error.isTtyError)
        } else {
            console.error(error)
        }
    }
}

employeeController.updateEmployeeRole = function () {

}

module.exports = employeeController;