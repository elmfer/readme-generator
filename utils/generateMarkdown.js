// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeMap = {
    "Apache 2.0": " [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "Boost 1.0": " [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "BSD 3-Clause": " [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "BSD 2-Clause": " [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    "CC0 1.0": " [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
    "EPL 1.0": " [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "GPL v3": " [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "GPL v2": " [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    "Hippocratic 2.1": "License: Hippocratic 2.1 [![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)",
    "IPL 1.0": " [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    "ISC": " [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    "MIT": " [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "MPL 2.0": " [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "Perl": " [![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
    "OFL 1.1": " [![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
    "Unlicense": " [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    "WTFPL": " [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
    "Zlib": " [![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
  };

  return badgeMap[license] ? badgeMap[license] : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const linkMap = {
    "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
    "Boost 1.0": "https://www.boost.org/LICENSE_1_0.txt",
    "BSD 3-Clause": "https://opensource.org/licenses/BSD-3-Clause",
    "BSD 2-Clause": "https://opensource.org/licenses/BSD-2-Clause",
    "CC0 1.0": "http://creativecommons.org/publicdomain/zero/1.0/",
    "EPL 1.0": "https://opensource.org/licenses/EPL-1.0",
    "GPL v3": "https://www.gnu.org/licenses/gpl-3.0",
    "GPL v2": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    "Hippocratic 2.1": "https://firstdonoharm.dev",
    "IPL 1.0": "https://opensource.org/licenses/IPL-1.0",
    "ISC": "https://opensource.org/licenses/ISC",
    "MIT": "https://opensource.org/licenses/MIT",
    "MPL 2.0": "https://opensource.org/licenses/MPL-2.0",
    "Perl": "https://opensource.org/licenses/Artistic-2.0",
    "OFL 1.1": "https://opensource.org/licenses/OFL-1.1",
    "Unlicense": "http://unlicense.org/",
    "WTFPL": "http://www.wtfpl.net/about/",
    "Zlib": "https://opensource.org/licenses/Zlib"
  };

  return linkMap[license] ? linkMap[license] : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  const licenseBadge = renderLicenseBadge(license);

  return `${licenseBadge}

This project in under the ${license}. Learn more about the license here: ${licenseLink}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  data.licenseLink = renderLicenseLink(data.license);
  data.licenseBadge = renderLicenseBadge(data.license);
  data.licenseSection = renderLicenseSection(data.license);

  return `# ${data.name}

${data.licenseBadge}
 
${data.description}
 
## Table Of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
 
### Installation
 
${data.installation}
 
### Usage
 
${data.usage}
 
### License
 
${data.licenseSection}
 
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
