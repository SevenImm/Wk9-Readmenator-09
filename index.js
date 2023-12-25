// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./Dev');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const fs = require('fs');

  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`${fileName} successfully created!`);
  });
}

// TODO: Create a function to initialize app
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
