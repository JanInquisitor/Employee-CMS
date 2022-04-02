const inquirer = require('inquirer');
const questions = require('./questions');
const Employee = require('./classes/Employee');

let employeeController = {};

employeeController.addEmployee = async function (dbConnection) {
    try {

        // Receive the answers
        const answers = await inquirer.prompt(questions.employeeQuestions());

        // Create the department object
        const employee = new Employee(answers.firstName, answers.lastName, answers.roleId,);

        // Save it to the database
        dbConnection.query(`INSERT INTO employee (first_name, last_name, role_id)
                            VALUES ("${employee.firstName}", "${employee.lastName}", ${employee.roleId})`, () => {
            console.log('Employee created!')
        })

    } catch (error) {
        if (error.isTtyError) {
            console.error(error.isTtyError)
        } else {
            console.error(error)
        }
    }
}

employeeController.getAllEmployees = (dbConnection) => {
    try {
        dbConnection.query(`SELECT *
                            FROM employee_cms_db.employee`, (err, results, fields) => {
            console.table(results)
            process.exit()
        })

    } catch (error) {
        console.error(error)
    }
}

employeeController.updateEmployeeRole = async (dbConnection) => {
    try {
        // Receive the answers
        const answers = await inquirer.prompt(questions.updateEmployeeQuestions());

        dbConnection.query(`SELECT *
                            FROM employee
                            WHERE id = ${answers.employeeId}`,
            (err, results, fields) => {
                dbConnection.query(`UPDATE employee
                                    SET role_id = ${answers.newRoleId}
                                    WHERE id = ${answers.employeeId}`)
            })
        process.exit();
    } catch (error) {
        if (error.isTtyError) {
            console.error(error.isTtyError)
        } else {
            console.error(error)
        }
    }
}

module.exports = employeeController;