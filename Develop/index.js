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
    message: 'Please add a description for the project (required)',
    validate: descriptionInput => {
      if (descriptionInput){
        return true;
      }else {
        console.log('Please enter project description');
        return false;
      }
    }
  },
  // Add Description of usage
  {
    type: 'input',
    name: 'usage',
    message: 'Please describe the usage of the project (required)',
    validate: usageInput => {
      if (usageInput){
        return true;
      }else {
        console.log('Please enter the usage of the project');
        return false;
      }
    }
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
    message: 'Please enter a short alt text for the image',
    when: ({ confirmImage }) => confirmImage,
    validate: imageAltInput => {
      if (imageAltInput){
        return true;
      }else {
        console.log('Please enter the alt text for your image');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'imageName',
    message: 'Please add the image to the assets/images folder of this repository and type the image name and file ending',
    when: ({ confirmImage }) => confirmImage,
    validate: imageNameInput => {
      if (imageNameInput){
        return true;
      }else {
        console.log('Please enter a valid file name');
        return false;
      }
    }
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
    when: ({ confirmCredit }) => confirmCredit,
    validate: creditNameInput => {
      if (creditNameInput){
        return true;
      }else {
        console.log('Please enter the name of the collaborator');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'creditGithub',
    message: 'please enter Github(s) of credited individial(s) in order',
    when: ({ confirmCredit }) => confirmCredit,
    validate: creditGithubInput => {
      if (creditGithubInput){
        return true;
      }else {
        console.log('Please enter a valid github username');
        return false;
      }
    }
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
    message: 'Please enter links to any contribution (required)',
    validate: contributionInput => {
      if (contributionInput){
        return true;
      }else {
        console.log('Please enter any contribution, if none enter no contribution');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'assets',
    message: 'Please enter link(s) to any assets or third party libraries used (required)',
    validate: assetsInput => {
      if (assetsInput){
        return true;
      }else {
        console.log('Please enter any additional assets, if none enter no additional assets');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter the command that you use to install dependencies (required)',
    validate: installationInput => {
      if (installationInput){
        return true;
      }else {
        console.log('Please enter the command used to install dependencies');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What command should be used to run (required)',
    validate: testsInput => {
      if (testsInput){
        return true;
      }else {
        console.log('Please enter the command to test the project');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your github username (required)',
    validate: githubInput => {
      if (githubInput){
        return true;
      }else {
        console.log('Please enter your github username');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email for contact information (required)',
    validate: emailInput => {
      if (emailInput){
        return true;
      }else {
        console.log('Please enter a valid email');
        return false;
      }
    }
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