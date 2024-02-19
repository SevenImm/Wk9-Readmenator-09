// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT'){
    badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'GPL v3.0') {
    badge = '![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (license === 'Creative Commons Licenses') {
    badge = '![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)'
  } else {
    badge = ''
  }
  return badge;}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    licenseLink = 'https://github.com/Naereen/StrapDown.js/blob/master/LICENSE'
  } else if (license === 'GPL v3.0') {
    licenseLink = 'http://perso.crans.org/besson/LICENSE.html'
  } else if (license === 'Creative Commons Licenses') {
    licenseLink = 'https://creativecommons.org/licenses/by-nd/4.0'
  } if (!license) {
    return '';
  }

  return `[View License](https://choosealicense.com/licenses/${license}/)`;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license) {
    return '';
  }

  return `## License

This project is licensed under the ${license} License - see the [License](#license) section for details.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
  # ${data.title}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  ## Table of Contents
  ### * [License](#license)
  ### * [Installation](#installation)
  ### * [Usage](#usage)
  ### * [Contributers](#contributers)
  ### * [Tests](#tests)
  ### * [Questions](#Questions)

  ## Installation:
  ### The following is required to run this app:
  ### ${data.installation}

  ## Usage:
  ### ${data.usage}

  ## Contributers:
  ### ${data.contributers}

  ## Tests: 
  ### ${data.test}

  ## Questions:
  ### If you have any questions, feel free to reach out at
  ### Email: ${data.email}
  ### or 
  ### Github: ${data.github}
`;

}

module.exports = generateMarkdown;