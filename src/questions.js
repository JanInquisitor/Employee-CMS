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

questions.departmentQuestions = function (dbConnection) {
    return [
        // {
        //     type: 'input',
        //     name: 'id',
        //     message: 'Id of the department?'
        // },
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

questions.employeeQuestions = function () {
    return [
        {
            type: 'input',
            name: 'firstName',
            message: 'Employee first name?'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Employee last name?'
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'Id of the role?'
        }
    ]
};

questions.updateEmployeeQuestions = function () {
    return [
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter employee id.'
        },
        {
            type: 'input',
            name: 'newRoleId',
            message: 'Which role id?'
        }
    ]
};

module.exports = questions