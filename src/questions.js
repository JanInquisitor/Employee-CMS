const questions = {}

questions.menuActions = function () {
    return {
        type: 'list',
        name: 'action',
        message: 'What would you wanna do?.',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ]
    }
}

questions.departmentQuestions = function () {
    return [
        {
            type: 'input',
            name: 'id',
            message: 'Id of the department?'
        },
        {
            type: 'input',
            name: 'name',
            message: 'Name of the department?'
        }
    ]
}

questions.roleQuestions = function () {
    return [
        {
            type: 'input',
            name: 'id',
            message: 'Id of the role?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'Title of the role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Salary?'
        },
        {
            type: 'input',
            name: 'departmentId',
            message: 'Id of the department?'
        }
    ]
}

questions.employeeOptions = function () {
    return [
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the employee?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee?'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of this employee?',
            choices: ['Engineer', 'Intern', 'Employee']
        },
    ]
};


module.exports = questions