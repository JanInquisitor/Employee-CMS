class Employee {
    id;
    firstName;
    lastName;
    roleId;
    managerId;

    constructor(id, firstName, lastName, roleId, managerId) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleId = roleId;
        this.managerId = managerId
    }

}

module.exports = Employee;