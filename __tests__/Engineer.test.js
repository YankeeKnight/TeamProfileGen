//engineer constructor
const Engineer = require('../lib/Engineer');

//engineer object created
test('creates an Engineer object', () => {
    const engineer = new Engineer('Manny', 10, 'manny@manny.com', 'YankeeKnight');

    expect(engineer.github).toEqual(expect.any(String));
});

//gets username from getGithub()
test('gets engineer github username', () => {
    const engineer = new Engineer('Manny', 10, 'manny@manny.com', 'YankeeKnight');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//gets role from getRole()
test('gets employee role', () => {
    const engineer = new Engineer('Manny', 10, 'manny@manny.com', 'YankeeKnight');

    expect(engineer.getRole()).toEqual("Engineer");
});