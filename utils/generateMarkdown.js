// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  //'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'
  if (license === 'MIT'){
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  }
  else if (license === 'APACHE 2.0'){
    badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  }
  else if (license === 'GPL 3.0'){
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }
  else if (license === 'BSD 3'){
    badge = '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';
  }
  else {
    badge = '';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  //'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'
  if (license === 'MIT'){
    licenseLink = 'https://opensource.org/licenses/MIT';
  }
  else if (license === 'APACHE 2.0'){
    licenseLink = 'https://opensource.org/licenses/Apache-2.0';
  }
  else if (license === 'GPL 3.0'){
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
  }
  else if (license === 'BSD 3'){
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
  }
  else {
    licenseLink = '';
  }
  return licenseLink;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  
  licenseSection = `${license}`;
  
  return licenseSection
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseLink = renderLicenseLink(data.license);
  let licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}
  ## Description: 
  ${data.description}
  ## Installation: 
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Contribution Details: 
  ${data.contribution}
  ## Test Instructions: 
  ${data.instructions}

  ##License: ${licenseSection}

  ${licenseBadge}    
  ${licenseLink} 
  Below mentioned in my github profile and email address if you want to get in touch with me
  ## Github: https://github.com/${data.github}
  ## Email id: ${data.email}
  

`;
}

module.exports = generateMarkdown;
