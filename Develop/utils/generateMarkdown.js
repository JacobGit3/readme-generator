// Generate license badge and link, if not licensed return nothing
function genLicense(license) {
  let badge = '';
  if (license = 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';    
    return badge;
  }else if (license = 'AGPL v3') {
    badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    return badge;
  }else if (license = 'GPL v3') {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    return badge;
  }else if (license = 'Mozilla Public License 2.0') {
    badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    return badge;
  }else if (license = 'Unlicense') {
    badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    return badge;
  }else {
    return;
  }
}

// Generate image with alt text if image is provided
function genImage(image, alt, name) {
  if (image == true) {
    imgLink = `![${alt}](assets/images/${name})`;
    return imgLink;
  }else {
    imgLink = '';
    return imgLink;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${genLicense(data.license)}

  ## Table of Contents:

  ---
  * [Description](#description)
  * [Installation](#installation)  
  * [Usage](#usage)  
  * [Credits](#credits)    
  * [Tests](#tests)  
  * [Questions](#questions)  

  ## Description

  ---
  ${data.description}

  ## Installation:

  ---
  To install all necessary dependencies for this program,
  open the console and run the following command:  
  \`\`\`${data.installation}\`\`\`

  ## Usage

  ---
  ${data.usage}
  ${genImage(data.confirmImage, data.imageAlt, data.imageName)}

  ## Credits

  ---
  ### Collaborators:
  Name: ${data.creditName}  
  Github: ${data.creditGithub}  

  ### Third Party Assets:
  ${data.assets}
  
  ### Third Party Docs / Contribution:
  ${data.contribution}

  ## Tests

  ---
  To test this application run this command in the console:  
  \`\`\`${data.tests}\`\`\`

  ## Questions

  ---
  For any questions feel free to reach out through the following contacts:  

  Email: ${data.email}  
  Github: https://github.com/${data.github}  
  `;
}

module.exports = generateMarkdown;
