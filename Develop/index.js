// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the project title? (Required)',
    validate: nameInput => {
      if (nameInput){
        return true;
      }else {
        console.log('Please enter project title');
        return false;
      }
    }
  },
  // Add Description Text
  {
    type: 'input',
    name: 'description',
    message: 'Please add a description for the project',
  },
  // Add Description of usage
  {
    type: 'input',
    name: 'usage',
    message: 'Please describe the usage of the project'
  },
  // Add Image(s)
  {
    type: 'confirm',
    name: 'confirmImage',
    message: 'Would you like to add image to the usage section?',
    default: true
  },
  {
    type: 'input',
    name: 'imageAlt',
    message: 'Please enter a short alt text for the image'
  },
  {
    type: 'input',
    name: 'imageName',
    message: 'Please add the image to the assets/images folder of this repository and type the image name and file ending',
    when: ({ confirmImage }) => confirmImage
  },
  // Add Credits
  {
    type: 'confirm',
    name: 'confirmCredit',
    message: 'Would you like to give any people credit?',
    default: true
  },
  {
    type: 'input',
    name: 'creditName',
    message: 'please enter name(s) of credited individial(s)',
    when: ({ confirmCredit }) => confirmCredit
  },
  {
    type: 'input',
    name: 'creditGithub',
    message: 'please enter Github(s) of credited individial(s) in order',
    when: ({ confirmCredit }) => confirmCredit
  },
  // Add License
  {
    type: 'list',
    name: 'license',
    message: 'What license(s) does your project have?',
    choices: ['MIT','AGPL v3','GPL v3','Mozilla Public License 2.0','The Unlicensed', 'Not Licensed']  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please enter links to any contribution'
  },
  {
    type: 'input',
    name: 'assets',
    message: 'Please enter link(s) to any assets or third party libraries used'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter the command that you use to install dependencies'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What command should be used to run tests'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your github username'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email for contact information'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    err ? console.log(err) : console.log('File created!');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function(data) {
    console.log(data);
      writeToFile('generatedReadme.md', generateMarkdown(data));
    });
};

// Function call to initialize app
init();