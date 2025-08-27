Step 2: JavaScript Logic
// Employee data structure
let employees = [
  { id: 1, name: "Alice", position: "Developer", salary: 50000, department: "IT", available: true },
  { id: 2, name: "Bob", position: "Manager", salary: 70000, department: "HR", available: false }
];

let nextId = 3;

// Add Employee
function addEmployee() {
  const name = document.getElementById("empName").value;
  const position = document.getElementById("empPosition").value;
  const salary = parseFloat(document.getElementById("empSalary").value);
  const department = document.getElementById("empDept").value;
  const available = document.getElementById("empAvailable").value === "true";

  if (!name || !position || !salary || !department) {
    alert("Please fill all fields");
    return;
  }

  employees.push({ id: nextId++, name, position, salary, department, available });
  displayEmployees();
}

// Remove Employee by ID
function removeEmployee(id) {
  employees = employees.filter(emp => emp.id !== id);
  displayEmployees();
}

// Update Employee Availability
function toggleAvailability(id) {
  const emp = employees.find(emp => emp.id === id);
  if (emp) emp.available = !emp.available;
  displayEmployees();
}

// Search Employee by name
function searchEmployee() {
  const searchName = document.getElementById("searchName").value.toLowerCase();
  const results = employees.filter(emp => emp.name.toLowerCase().includes(searchName));
  displayEmployees(results);
}

// Salary Calculation
function calculateTotalSalary() {
  return employees
    .filter(emp => emp.available)
    .reduce((total, emp) => total + emp.salary, 0);
}

// Department Report
function generateDepartmentReport() {
  const report = {};
  employees.forEach(emp => {
    if (!report[emp.department]) report[emp.department] = 0;
    report[emp.department] += emp.salary;
  });
  return report;
}

// Display Employees in table
function displayEmployees(list = employees) {
  let html = "<table><tr><th>ID</th><th>Name</th><th>Position</th><th>Salary</th><th>Department</th><th>Available</th><th>Actions</th></tr>";
  list.forEach(emp => {
    html += `
      <tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.position}</td>
        <td>${emp.salary}</td>
        <td>${emp.department}</td>
        <td>${emp.available ? "Yes" : "No"}</td>
        <td>
          <button onclick="removeEmployee(${emp.id})">Remove</button>
          <button onclick="toggleAvailability(${emp.id})">Toggle Availability</button>
        </td>
      </tr>`;
  });
  html += "</table>";

  // Add summary info
  html += `<p><strong>Total Salary of Active Employees:</strong> ${calculateTotalSalary()}</p>`;
  html += `<p><strong>Department Report:</strong> ${JSON.stringify(generateDepartmentReport())}</p>`;

  document.getElementById("employeeList").innerHTML = html;
}

// Show initial employees
displayEmployees();
