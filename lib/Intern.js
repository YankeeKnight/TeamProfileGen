//import Employee constructor
const Employee = require('./Employee');

//intern constructor extends employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
};

//exports
module.exports = Intern;