const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template')
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const team = [];

const promptManager = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: 'name',
                message: "Enter manager's name: ",
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter manager's employee ID: ",
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter Manager's email adress: ",
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Enter manager's office number: ",
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter office number!');
                        return false;
                    }
                }
            }
        ]).then(managerData => {
            team.push({ ...managerData, role: 'Manager' });
            addMembers();
            return managerData;
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
                message: "Enter Engineer's name: ",
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter Engineer's employee ID: ",
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter Engineer's email adress: ",
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Enter Engineer's gitHub username: ",
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter GitHub username!');
                        return false;
                    }
                }
            }
        ]).then(engineerData => {
            team.push({ ...engineerData, role: 'Engineer' });
            addMembers();
            return engineerData;
        })
}
const checkIntern = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: 'name',
                message: "Enter Intern's name: ",
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter Intern's employee ID: ",
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter Intern's email adress: ",
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "Enter school Intern is attending: ",
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter school!');
                        return false;
                    }
                }
            }
        ]).then(internData => {
            team.push({ ...internData, role: 'Manager' });
            addMembers();
            return internData;
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