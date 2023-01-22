//manager constructor
const Manager = require('../lib/Manager');

//manager object created
test('creates a manager object', () => {
    const manager = new Manager('Manny', 10, 'manny@manny.com', 6466706641);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//get role
test('gets employee role', () => {
    const manager = new Manager('Manny', 10, 'manny@manny.com');

    expect(manager.getRole()).toEqual("Manager");
});