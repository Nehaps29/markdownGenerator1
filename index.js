// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'title',
    message: 'What is your title for the project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter description for your project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter contribution details',
  },
  {
    type: 'input',
    name: 'instructions',
    message: 'Enter test instructions',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project use?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3']
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your Email address.',
  },];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  /*inquirer
  .prompt(questions)
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });*/

  inquirer
  .prompt(questions)
  .then((answers) => {
    writeToFile('README.md', generateMarkdown({...answers}));
  });

}

// Function call to initialize app
init();


module.exports  = questions;