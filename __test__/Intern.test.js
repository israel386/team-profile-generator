const Intern = require('../lib/Intern.js');

const intern = new Intern('Israel', "University of Central Florida");

test('get interns school', () => {
    expect(intern.getSchool()).toBe("University of Central Florida");
});

test('get interns role', () => {
    expect(intern.getRole()).toBe('Intern');
});