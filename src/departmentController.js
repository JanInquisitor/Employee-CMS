const inquirer = require('inquirer');
const questions = require('./questions');
const Department = require('./classes/Department')

let departmentController = {};

// This is only in the meantime
departmentController.departmentList = [];

departmentController.addDepartment = async function (dbConnection) {
    try {
        // Receive the answers
        const answers = await inquirer.prompt(questions.departmentQuestions())

        // Create the department object
        let newDepartment = new Department(answers.id, answers.name)

        // Save it to the database
        dbConnection.query(`INSERT INTO department (id, name)
                            VALUES (${newDepartment.id}, "${newDepartment.departmentName}")`)

        console.log('Department created!')
    } catch (error) {
        if (error.isTtyError) {
            console.error(error.isTtyError)
        } else {
            console.error(error)
        }
    }
}

module.exports = departmentController;