const inquirer = require('inquirer');
const questions = require('./questions');
const Department = require('./classes/Department')

let departmentController = {};

// This is only in the meantime
departmentController.departmentList = [];

departmentController.addDepartment = async function () {
    try {
        const answers = await inquirer.prompt(questions.departmentQuestions())
        let newDepartment = new Department(answers.id, answers.name)
        console.log(newDepartment)
    } catch (error) {
        if (error.isTtyError) {
            console.error(error.isTtyError)
        } else {
            console.error(error)
        }
    }

}

module.exports = departmentController;