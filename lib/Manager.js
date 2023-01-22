//import Employee constructor
const Employee = require('./Employee');

//manager constructor extends employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
};

//exports
module.exports = Manager;