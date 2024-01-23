const fs = require("fs");
const path = require("path");

const inquirer = require('inquirer')

const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a title for your project.',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description for your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide user-installation instructions.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide any relevant usage information.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0',],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
      },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  
  if(!fs.existsSync(path.resolve(__dirname, 'dist'))){
    fs.mkdirSync(path.resolve(__dirname, 'dist'))
  }

  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
  });
}

// function call to initialize program
init();
