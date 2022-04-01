const inquirer = require('inquirer');
const questions = require('./questions');
const Role = require('./classes/Role');

let roleController = {};

roleController.addRole = async function () {
    try {
        const answers = await inquirer.prompt(questions.roleQuestions());
        const newRole = new Role(answers.id, answers.title, answers.salary, answers.departmentId)

        console.log(newRole);

    } catch (error) {
        if (error.isTtyError) {
            console.error(error.isTtyError)
        } else {
            console.error(error)
        }
    }
};


module.exports = roleController;