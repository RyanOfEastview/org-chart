const Intern = require("../lib/Intern");

test("Set school using function", () => {
    const school = "Umbrella Academy";
    const employee = new Intern("Ryan", 1, "ryanmccarthy613@gmail.com", school);
    expect(employee.school).toBe(school);
});

test("getRole() should return Intern", () => {
    const role = "Intern";
    const employee = new Intern("Ryan", 1, "ryanmccarthy613@gmail.com", "RyanOfEastview");
    expect(employee.getRole()).toBe(role);
});