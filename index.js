const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template')
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const team = [];

const promptManager = (managerData) => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: 'name',
                message: "Enter manager's name: "
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter manager's employee ID: "
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter Manager's email adress: "
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Enter manager's office number: "
            }
        ]).then(managerDataA => {
            team.push({ ...managerDataA, role: 'Manager' });
            addMembers();
            return managerDataA;
        })
}

const addMembers = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: 'role',
            message: 'Select Employee to add to your team',
            choices: ['Engineer', 'Intern', 'Finish']
        }
    ])
        .then(roleChoice => {
            if (roleChoice.role === 'Engineer') {
                checkEngineer();
            } if (roleChoice.role === 'Intern') {
                checkIntern();
            } if (roleChoice.role === 'Finish') {
                finishTeam();
            }
        })
}
const checkEngineer = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: 'name',
                message: "Enter Engineer's name: "
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter Engineer's employee ID: "
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter Engineer's email adress: "
            },
            {
                type: 'input',
                name: 'github',
                message: "Enter Engineer's gitHub username: "
            }
        ]).then(engineerData => {
            console.log(engineerData);
            const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
            team.push({ ...engineer, role: 'Engineer' })
            addMembers();
        })
}
const checkIntern = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: 'name',
                message: "Enter Intern's name: "
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter Intern's employee ID: "
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter Intern's email adress: "
            },
            {
                type: 'input',
                name: 'school',
                message: "Enter school Intern is attending: "
            }
        ]).then(internData => {
            console.log(internData);
            const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
            team.push({ ...intern, role: 'Intern' })
            addMembers();
        })
}
const finishTeam = () => {
    console.log(team);
    const pageHTML = generatePage(team);
    fs.writeFile('./dist/index.html', pageHTML, err => {
        if (err) throw new Error(err);
        console.log('Page created! Check out index.html in this directory to see it!');
    })

}
promptManager();