const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
    const github = "RyanOfEastview";
    const employee = new Engineer("Ryan McCarthy", 1, "ryanmccarthy613@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Ryan", 1, "ryanmccarthy613@gmail.com", "RyanOfEastview");
    expect(employee.getRole()).toBe(role);
  });