const inquirer = require('inquirer');
const questions = require('./questions');
const Department = require('./classes/Department')

let departmentController = {};


departmentController.addDepartment = async (dbConnection) => {
    try {
        // Receive the answers
        const answers = await inquirer.prompt(questions.departmentQuestions())

        // Create the department object
        // let department = new Department(answers.name)

        // Save it to the database
        dbConnection.query(`INSERT INTO department (name)
                            VALUES ("${answers.name}")`, () => {
            console.log('Department created!')
            process.exit()
        })


    } catch (error) {
        if (error.isTtyError) {
            console.error(error.isTtyError)
        } else {
            console.error(error)
        }
    }
}

departmentController.getAllDepartments = async (dbConnection) => {
    try {
        dbConnection.query(`SELECT *
                            FROM employee_cms_db.department`, (err, results, fields) => {
            console.table(results)
            process.exit()
        })
    } catch (error) {
        if (error.isTtyError) {
            console.error(error.isTtyError)
        } else {
            console.error(error)
        }
    }
}

module.exports = departmentController;