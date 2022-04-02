const inquirer = require('inquirer');
const questions = require('./questions');
const Role = require('./classes/Role');

let roleController = {};

roleController.addRole = async (dbConnection) => {
    try {
        // Receive the answers
        const answers = await inquirer.prompt(questions.roleQuestions());

        // Create the department object
        const role = new Role(answers.id, answers.title, answers.salary, answers.departmentId)

        // Save it to the database
        dbConnection.query(`INSERT INTO role (title, salary, department_id)
                            VALUES ("${role.title}", ${role.salary}, ${role.departmentId})`, () => {
            console.log('Role created!')
        });

    } catch (error) {
        if (error.isTtyError) {
            console.error(error.isTtyError)
        } else {
            console.error(error)
        }
    }
};

roleController.getAllRoles = async (dbConnection) => {
    try {
        dbConnection.query(`SELECT *
                            FROM employee_cms_db.role`, (err, results, fields) => {
            console.table(results)
            process.exit()
        })

    } catch (error) {
        console.error(error)
    }
}

module.exports = roleController;