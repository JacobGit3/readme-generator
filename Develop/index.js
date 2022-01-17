// Include packages needed for this application
const inquirer = require('inquirer');

// Create and ask array of questions for user input
const askQuestions = () => {
  // questions array
  return inquirer.prompt([
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
      message: 'Please add a description for the project'
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
      name: 'imagePath',
      message: 'Please enter the path to the image you would like to add',
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
      message: 'please enter name of credited individial',
      when: ({ confirmCredit }) => confirmCredit
    },
    {
      type: 'input',
      name: 'creditGithub',
      message: 'please enter Github of credited individial',
      when: ({ confirmCredit }) => confirmCredit
    },
    // Add License
    {
      type: 'input',
      name: 'license',
      message: ''
    },
    {
      contribution: '',
      tests: '',
      questions: '',
      github: '',
      email: '',
    }
  ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  askQuestions();
}

// Function call to initialize app
init();

/* 
Create questions array
create function that plugs in questions and gets result to save space.
-> one for inputs, one for confirms etc.
with new created and filled data obj pass it into writefile and plug the values into the template.
....
*/