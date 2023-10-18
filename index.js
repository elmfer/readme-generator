// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const MarkdownGenerator = require('./utils/generateMarkdown');

const OUTPUT_FILE_PATH = "./out";
const OUTPUT_FILE_NAME = "README.md";

// TODO: Create an array of questions for user input
const questions = [
  {
    message: "Project name",
    type: 'input',
    name: 'name'
  },
  {
    message: "Description",
    type: 'input',
    name: 'description'
  },
  {
    message: "Installation instructions",
    type: 'input',
    name: 'installation'
  },
  {
    message: "Usage information",
    type: 'input',
    name: 'usage'
  },
  {
    message: "Contribution Guidelines",
    type: 'input',
    name: 'contributing'
  },
  {
    message: "Test instructions",
    type: 'input',
    name: 'tests'
  },
  {
    message: "License",
    type: 'list',
    name: 'license',
    choices: [
      "Apache 2.0", 
      "Boost 1.0",
      "BSD 3-Clause",
      "BSD 2-Clause",
      "CC0 1.0",
      "EPL 1.0",
      "GPL v3",
      "GPL v2",
      "Hippocratic 2.1",
      "IPL 1.0",
      "ISC",
      "MIT",
      "MPL 2.0",
      "Perl",
      "OFL 1.1",
      "Unlicense",
      "WTFPL",
      "Zlib"
    ]
  },
  {
    message: "GitHub username",
    type: 'input',
    name: 'github'
  },
  {
    message: "Email",
    type: 'input',
    name: 'email'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  if(!fs.existsSync(OUTPUT_FILE_PATH))
    fs.mkdirSync(OUTPUT_FILE_PATH);

  fs.writeFileSync(path.join(OUTPUT_FILE_PATH, fileName), data);
}

function promptUser() {
  return inquirer.prompt(questions).then((answers) => console.log(answers));
}

// TODO: Create a function to initialize app
function init() {
  promptUser();
}

// Function call to initialize app
init();
