// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  // TODO: Implement logic to return the license badge based on the license passed in
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)


## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.tests}

## License
 ${renderLicenseSection(data.license)} license.

## Questions
Contact me on this platforms:
[${data.email}](mailto:${data.email}). 
[GitHub Profile](https://github.com/${data.github}) 
`;
}

export default generateMarkdown;
