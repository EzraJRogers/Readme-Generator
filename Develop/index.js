// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
      type: "input",
      name: "title",
      message: "Enter the project title:"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of the project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage instructions:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter contribution guidelines:"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions:"
    },
    {
        type: 'checkbox',
        message: 'Select licenses:',
        name: 'licenses',
        choices: [
            // Your licensing options here
            { name: 'MIT License', value: 'MIT' },
            { name: 'Apache License 2.0', value: 'Apache-2.0' },
            // Add more options as needed
        ],
    },
  ];

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("README.md generated successfully!");
    });
  }

function init() {
  inquirer.prompt(questions).then(answers => {
    const readmeContent = generateMarkdown(answers);
    writeToFile("README.md", readmeContent);
  });
}

// Function call to initialize app
init();
