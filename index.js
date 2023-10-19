// Include packages needed for this application
const inquirer = require('inquirer'); // Asks user for input to write to template
const fs = require('fs'); // Filesystem for creating and writing files
const path = require('path'); // File paths util for joining paths
const generateMarkdown = require('./utils/generateMarkdown'); // Markdown generator util

// File names and paths for output file
const OUTPUT_FILE_PATH = "./out";
const OUTPUT_FILE_NAME = "README.md";

// List of questions for user to fill in
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
    // List of licenses all sourced from: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
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

// A README file writer
function writeToFile(fileName, data) {
  if(!fs.existsSync(OUTPUT_FILE_PATH))
    fs.mkdirSync(OUTPUT_FILE_PATH);

  fs.writeFileSync(path.join(OUTPUT_FILE_PATH, fileName), data);
}

// Inquiery user for inputs
function promptUser() {
  return inquirer.prompt(questions);
}

// Main function, called upon startup
function init() {
  //Inquiry user for inputs
  promptUser()
  .then((answers) => {
    // Then generate markdown for the inquiry
    const data = generateMarkdown(answers);

    // Finally, write markdown into a file
    writeToFile(OUTPUT_FILE_NAME, data);
  })
}

// Function call to initialize app
init();
