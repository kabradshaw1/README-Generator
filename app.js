const inquirer = require("inquirer");
const writeFile = require("./utils/generate-README.js")
const generateREADME = require('./src/README-template.js');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please discribe your project.',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Please explain how to install your project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please explain how to use your application.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please provide contribution guidelines.',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Please providing testing instructions.',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Please select a license type.',
      choices: ["MIT license",'GNU GPLv3', 'Apache License 2.0', 'ISC License']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub profile name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ])
  
}

promptUser()
  .then(data => {
    return generateREADME(data);
  })
  .then(pageREADME => {
    return writeFile(pageREADME);
  })
  .catch(err => {
    console.log(err);
  })
