const Engineer = require('../lib/Engineer.js');

const engineer = new Engineer('Israel', 'israel386');

test('get engineers GitHub username', () => {

    expect(engineer.getGitHub()).toBe('israel386');
});

test('get role as engineer', () => {
    expect(engineer.getRole()).toBe('Engineer');
});