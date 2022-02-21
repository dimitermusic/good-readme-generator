// Packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// Inquirer package to gather responses from user
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Add a brief description of your project.',
        name: 'descr',
    },
    {
        type: 'input',
        message: 'Add installation instructions.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Add usage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Add contribution guidelines.',
        name: 'contr',
    },
    {
        type: 'list',
        message: 'Choose a license.',
        name: 'lic',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'The MIT License', 'Mozilla Public License 2.0', 'The Do What the F You Want to Public License']
    },
    {
        type: 'input',
        message: 'Add testing instructions',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'git',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
])

    // Saving user responses to variables to pass information through to generated file.
    .then((response) => {
        const title = response.title
        const descr = response.descr
        const install = response.install
        const usage = response.usage
        const contr = response.contr
        let lic = response.lic
        const test = response.test
        const git = response.git
        const email = response.email
        let licDescr = ''

        // Setting the license image and description based on the user's choice.
        switch (lic) {
            case 'Apache 2.0 License':
                lic = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
                licDescr = 'This application is covered under the Apache 2.0 License'
                break;
            case 'Boost Software License 1.0':
                lic = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
                licDescr = 'This application is covered under the Apache 2.0 License'
                break;
            case 'The MIT License':
                lic = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
                licDescr = 'This application is covered under the MIT License'
                break;
            case 'Mozilla Public License 2.0':
                lic = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
                licDescr = 'This application is covered under the Mozilla Public License 2.0'
                break;
            case 'The Do What the F You Want to Public License':
                lic = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
                licDescr = 'This application is covered under the The Do What the F You Want to Public License'
                break;
            default:
        }

        // Using the fs package to create and write a markdown file with user's input using template literals.
        fs.writeFile('./output/README.md',
            `# ${title} ${lic}

## Description
${descr}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Testing Instructions](#testing-instructions)
- [Questions](#questions)

## Installation
${install}

## Usage
${usage}

## Contributing
${contr}

## License
${licDescr}

## Testing Instructions
${test}

## Questions
If you have any questions, please visit my GitHub profile or email me using the links below:

[Github](https://github.com/${git})  
[Email](mailto:${email})`, (err) =>
            // Turner function to display a message whether there was an error or the file was successfully written.
            err ? console.error(err) : console.log('README.md successfully written!')
        );
    }
    );