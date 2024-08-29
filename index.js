// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project',
},

{
    type: 'input',
    name: 'description',
    message: 'Describe your application',
},

{
    type: 'input',
    name: 'installation',
    message: 'Explain how to install your application',
},

{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use',
},

{
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'No License'],
},

{
    type: 'confirm',
    name: 'confirmContributers',
    message: 'Will other developers be contributing to this project?',
    default: true
},

{
    type: 'input',
    name: 'contributers',
    message: 'List the names of the contributers',
    when: ({ confirmContributers }) => {
        if (confirmContributers) {
            return true;
        } else {
            message: 'No contributions';
        }
},

validate: confirmContributers => {
        if (contributerInput) {
          return true;
      } else {
        return false;
      }
    }
},

{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
},

{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
