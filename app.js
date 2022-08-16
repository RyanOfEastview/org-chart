// Require packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const fileDirectory = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirectory, "index.html");

//Module exports
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const renderHTML = require("./lib/generateHTML");

//Array of employees
let employeeArray = [];

//Employee questions
const questions = [
    {
        type: "input",
        name: "name", 
        message: "What is the name of the employee?"
    },
    {
        type: "input",
        name: "name", 
        message: "What is the employee's ID?"
    },
    {
        type: "input",
        name: "name", 
        message: "What is the employee's email address?"
    },
    {
        type: "input",
        name: "name", 
        message: "What is the employee's role?",
        choices: ["Engineer", "Intern", "Manager"]
    } 
]

// Questions for managers
managerQuestions = [
    {
        type: "input",
        name: "officeNumber",
        message: "What is the number of the manager's office?",
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            }else{
                console.log("Office number is mandatory.");
                return false;
            }
        }
    }
]

// Questions for engineers
engineerQuestions = [
    {
        type: "input",
        name: "github",
        message: "What is GitHub username of the engineer?",
        validate: github => {
            if (github) {
                return true;
            }else{
                console.log("GitHub username is mandatory.");
                return false;
            }
        }
    }
]

// Questions for interns
internQuestions = [
    {
        type: "input",
        name: "school",
        message: "What school did the intern attend?",
        validate: school => {
            if (school) {
                return true;
            }else{
                console.log("Intern's school is mandatory.");
                return false;
            }
        }
    }
]

// Initialization
const init = () => {
    if (fs.existsSync(filePath)) {
        inquirer.createPromptModule({
            type: "confirm",
            message: "index.html already exists.  Would you like to replace it?",
            name: "overwrite"
        }).then(async (response) => {
            let overwrite = response.overwrite;
            if(await overwrite === true) {
                console.log("Enter organizational chart information:")
                newEmployee()
            }else if (await overwrite === false) {
                console.log("index.html will not be replaced.")
            }
        })
    }else {
        console.log("Welcome to your org chart generator.  Please enter your team's details below:")
        newEmployee()
    }
};

// Create new employee
const newEmployee = async () => {
    await inquirer.prompt(questions)
      .then((response) => {
        let name = response.name;
        let id = response.id;
        let email = response.email;
        let role = response.role;
        let officeNumber;
        let github;
        let school;

        if (role === "Engineer") {
        inquirer.prompt(engineerQuestions).then((response) =>{
            github = response.github;
            let employee = new Engineer(name, id, email, github);
            employeesArr.push(employee);
            addEmployee(employeesArr);
            });
        }
        else if (role === "Manager") {
            inquirer.prompt(managerQuestions).then((response) =>{
                    officeNumber = response.officeNumber;
                    let employee = new Manager(name, id, email, officeNumber);
                    employeesArr.push(employee);
                    addEmployee(employeesArr);
                });
            }
        else if (role === "Intern") {
            inquirer.prompt(internQuestions).then((response) =>{
                school = response.school;
                let employee = new Intern(name, id, email, school);
                employeesArr.push(employee);
                addEmployee(employeesArr);
            });
        }

    });
};