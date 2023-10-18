// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const MarkdownGenerator = require('./utils/generateMarkdown');

const OUTPUT_FILE_PATH = "./out";
const OUTPUT_FILE_NAME = "README.md";

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  if(!fs.existsSync(OUTPUT_FILE_PATH))
    fs.mkdirSync(OUTPUT_FILE_PATH);

  fs.writeFileSync(path.join(OUTPUT_FILE_PATH, fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  writeToFile(OUTPUT_FILE_NAME, "test");
}

// Function call to initialize app
init();
