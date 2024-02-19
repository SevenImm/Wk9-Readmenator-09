// Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./dev/generateMarkdown');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title for this project?'
}, {
    type: 'input',
    name: 'description',
    message: 'What does this project do? Give a description.'
}, {
    type: 'list', 
    name: 'license',
    message: 'What license are you using for this project?',
    choices: ['MIT' , 'GPL v3.0', 'Creative Commons Licenses','None' ]
},  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this project?'
}, {
    type: 'input',
    name: 'installation',
    message: 'What instructions are needed for installation?'
}, {
    type: 'input',
    name: 'test',
    message: 'What instructions are needed for testing this project?'
}, {
    type: 'input',
    name: 'contributers',
    message: 'Who else has contributed to this project?'
}, {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
}, {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
},
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`${fileName} successfully created!`);
  });
}

// Create a function to initialize app
function init() {
  // Prompt the user with the questions
  inquirer.prompt(questions).then((answers) => {
    // Generate the README content
    const readmeContent = generateMarkdown(answers);

    // Write the README file
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();
