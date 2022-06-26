const Employee = require('../lib/Employee.js');

const employee = new Employee('Israel', 1, 'israel_delarosa@knights.ucf.edu');

test('gets employees name', () => {
    expect(employee.getName()).toBe('Israel');
});

test('get employees id', () => {
    expect(employee.getId()).toEqual(expect.any(Number));
})

test('get employess email', () => {
    expect(employee.getEmail()).toBe('israel_delarosa@knights.ucf.edu');
});

test('get employee role', () => {
    expect(employee.getRole()).toBe('Employee');
});