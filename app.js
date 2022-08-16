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
