class Department {
    id;
    departmentName;

    constructor(id, departmentName) {
    this.id = id;
    this.departmentName = departmentName;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.departmentName;
    }
}


module.exports = Department