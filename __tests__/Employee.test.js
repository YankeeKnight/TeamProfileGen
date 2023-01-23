//employee constructor
const Employee = require('../lib/Employee');

//employee object created
test('creates an employee object', () => {
    const employee = new Employee('Manny', 10, 'manny@manny.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//gets name from getName()
test('gets employee name', () => {
    const employee = new Employee('Manny', 10, 'manny@manny.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

//gets id from getId()
test('gets employee ID', () => {
    const employee = new Employee('Manny', 10, 'manny@manny.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

//get email
test('gets employee email', () => {
    const employee = new Employee('Manny', 10, 'manny@manny.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//gets role
test('gets employee role', () => {
    const employee = new Employee('Manny', 10, 'manny@manny.com');

    expect(employee.getRole()).toEqual("Employee");
});