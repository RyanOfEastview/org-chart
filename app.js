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