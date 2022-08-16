const Manager = require("../lib/Manager");

test("Set office number using function", () => {
    const officeNumber = "2444";
    const employee = new Manager("Ryan", 1, "ryanmccarthy613@gmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
});

test("getRole should return Manager as role", () => {
    const role = "Manager"
    const employee = new Manager("Ryan", 1, "ryanmccarthy613@gmail.com", "RyanOfEastview");
    expect(employee.getRole()).toBe(role);
});