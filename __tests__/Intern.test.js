//intern constructor
const Intern = require('../lib/Intern');

//intern object created
test('creates an Intern object', () => {
    const intern = new Intern('Manny', 10, 'manny@manny.com', 'UCF');

    expect(intern.school).toEqual(expect.any(String));
});

//gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Manny', 10, 'manny@manny.com', 'UCF');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//get role
test('gets employee role', () => {
    const intern = new Intern('Manny', 10, 'manny@manny.com', 'UCF');

    expect(intern.getRole()).toEqual("Intern");
});