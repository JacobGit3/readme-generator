// TODO: Create a function that returns a license badge based on which license is passed in

const { json } = require("stream/consumers");

// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ---
  ${data.description}

  ## Table of Contents:

  ---
  * [Installation](#installation)  
  * [Usage](#usage)  
  * [Credits](#credits)  
  * [License](#license)  
  * [Tests](#tests)  
  * [Questions](#questions)  

  ## Installation:

  ---
  To install all necessary dependencies for this program,
  open the console and run the following command:  
  \`\`\`${data.installation}\`\`\`

  ## Usage

  ---
  ${data.usage}

  ## Credits

  ---
  ### Collaborators:
  Name:  
  ${data.creditName}  
  Github:  
  ${data.creditGithub}  

  ### Third Party Assets:
  ${data.assets}
  
  ### Third Party Docs / Contribution:
  ${data.contribution}

  ## License

  ---
  This project is Licensed under:  
  ${data.license}

  ## Tests

  ---
  To test this application run this command in the console:  
  ${data.tests}

  ## Questions

  ---
  For any questions feel free to reach out through the following contacts:  

  Email:    
  ${data.email}  
  Github:  
  ${data.github}  
  `;
}

module.exports = generateMarkdown;
