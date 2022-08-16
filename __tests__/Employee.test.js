const Employee = require('../lib/Employee');

test('Set name of employee', () => {
    const name = "Bill Lumbergh";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('Set employee Id', () => {
    const id = "1";
    const employee = new Employee("Bill Lumbergh", id, "bill.lumbergh@initech.com");
    expect(employee.id).toBe(id);
});