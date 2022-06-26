const Manager = require('../lib/Manager.js');

const manager = new Manager('Israel', 1);

test('get managers office number', () => {
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test('get managers role', () => {
    expect(manager.getRole()).toBe('Manager');
});