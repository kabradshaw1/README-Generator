const inquirer = require("inquirer");
const writeFile = require(".utils/generate-README.md")

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    }
    {
      type: 'input',
      name: 'description',
      message: 'Please discribe your project.',
    }
    {
      type: 'input',
      name: 'install',
      message: 'Please explain how to install your project.',
    }
    {
      type: 'input',
      name: 'usage',
      message: 'Please explain how to use your application.',
    }
    {
      type: 'input',
      name: 'contribution',
      message: 'Please provide contribution guidelines.',
    }
    {
      type: 'input',
      name: 'testing',
      message: 'Please providing testing instructions.',
    }
    {
      type: 'checkbox',
      name: 'license',
      message: ,
      choises: []
    }
    {
      type: 'input',
      name: ,
      message: ,
    }
    {
      type: 'input',
      name: ,
      message: ,
    }
  ])
  .then(data =>
    console.log(data));
}

promptUser()
