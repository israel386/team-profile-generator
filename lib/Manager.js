const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, office) {
        super(name);

        this.office = office;
    }
    getOfficeNumber() {
        return this.office;
    }
    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;

