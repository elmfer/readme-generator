// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

  ${data.licenseBadge}
 
 ${data.description}
 
 ## Table Of Contents
 1. Installation
 2. Usage
 3. License
 4. Contributing
 5. Tests
 6. Questions
 
 ### Installation
 
 ${data.installation}
 
 ### Usage
 
 ${data.usage}
 
 ### License
 
 ${data.licenseBadge}
 
 This data is under the ${data.license} license.
 
 ### Contributing
 
 ${data.contributing}
 
 ### Tests
 
 ${data.tests}
 
 ### Questions
 
 What is the link to my GitHub?
 
 - Link to my GitHub profile: [https://github.com/${data.github}](https://github.com/${data.github})
 
 How can you contact me?
 
 - Contact me through my email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
