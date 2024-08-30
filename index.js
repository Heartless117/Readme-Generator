// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

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
    type: 'input',
    name: 'tests',
    message: 'Provide instructions on how to test your application',
},

{
    type: 'input',
    name: 'contributers',
    message: 'List the names of the contributers',
},

{
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'No License'],
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

function writeToFile(fileName, data) 
{
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Nice bro your README.md file has been generated")
    );
}


// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions).then((data) => 
        {
        writeToFile("README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();
