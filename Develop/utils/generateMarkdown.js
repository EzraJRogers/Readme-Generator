// Function to render license badge
function renderLicenseBadge(license) {
  // Map license names to badge URLs
  const licenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    // Add more licenses here as needed
  };

  // If license exists in badges, return badge, else return empty string
  return licenseBadges[license] || '';
}

// Function to render license link
function renderLicenseLink(license) {
  // Map license names to license links
  const licenseLinks = {
    'MIT': '[MIT License](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
    // Add more licenses here as needed
  };

  // If license exists in links, return link, else return empty string
  return licenseLinks[license] || '';
}

// Function to render license section of README
function renderLicenseSection(license) {
  // Map license names to license sections
  const licenseSections = {
    'MIT': 'This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).',
    'Apache 2.0': 'This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).',
    // Add more licenses here as needed
  };

  // If license exists in sections, return section, else return empty string
  return licenseSections[license] || '';
}
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, contact [${data.username}](https://github.com/${data.username}) or email [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
