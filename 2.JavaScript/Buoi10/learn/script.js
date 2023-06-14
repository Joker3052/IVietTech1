// Constructor function for Employee
function Employee(name, basicSalary, reward, fine) {
    this.name = name;
    this.basicSalary = basicSalary;
    this.reward = reward;
    this.fine = fine;
  }
  
  // Calculate total salary for an employee
  Employee.prototype.calculateSalary = function() {
    return this.basicSalary + this.reward - this.fine;
  };
  
  // Array to store employees
  var employees = [];
  
  // Function to add employees to the array
  function addEmployee(name, basicSalary, reward, fine) {
    var employee = new Employee(name, basicSalary, reward, fine);
    employees.push(employee);
  }
  
  // Sort employees array in descending order by salary
  function sortEmployeesBySalary() {
    employees.sort(function(a, b) {
      return b.calculateSalary() - a.calculateSalary();
    });
  }
  
  // Display employees in the table
  function displayEmployees() {
    var table = document.getElementById("employeeTable");
    table.innerHTML = "<tr><th>Name</th><th>Basic Salary</th><th>Reward</th><th>Fine</th><th>Total Salary</th></tr>";
  
    for (var i = 0; i < employees.length; i++) {
      var employee = employees[i];
      var totalSalary = employee.calculateSalary();
  
      var row = document.createElement("tr");
      row.innerHTML = "<td>" + employee.name + "</td><td>" + employee.basicSalary + "</td><td>" + employee.reward + "</td><td>" + employee.fine + "</td><td>" + totalSalary + "</td>";
  
      table.appendChild(row);
    }
  }
  
  // Function to count employees with salary >= $1,000
  function countEmployeesWithSalaryGreaterThan1000() {
    var count = 0;
    for (var i = 0; i < employees.length; i++) {
      var totalSalary = employees[i].calculateSalary();
      if (totalSalary >= 1000) {
        count++;
      }
    }
    return count;
  }
  //Add even
  function Add_employ() {
    var nameInput = document.getElementById("name");
    var basicInput = document.getElementById("basic");
    var rewardInput = document.getElementById("reward");
    var fineInput = document.getElementById("fine");

    var name = nameInput.value;
    var basicSalary = parseFloat(basicInput.value);
    var reward = parseFloat(rewardInput.value);
    var fine = parseFloat(fineInput.value);

    if (name && !isNaN(basicSalary) && !isNaN(reward) && !isNaN(fine)) {
        addEmployee(name, basicSalary, reward, fine);
        // sortEmployeesBySalary();
        displayEmployees();

        var count = countEmployeesWithSalaryGreaterThan1000();
        document.getElementById("employeeCount").textContent = count;

        nameInput.value = "";
        basicInput.value = "";
        rewardInput.value = "";
        fineInput.value = "";
    } else {
        alert("Please enter valid input for all fields.");
    }
}

  
  // Add employees to the array
  addEmployee("John Doe", 1000, 200, 100);
  addEmployee("Jane Smith", 1500, 300, 50);
  addEmployee("David Johnson", 1200, 100, 200);
  addEmployee("Sarah Williams", 1800, 400, 0);
  addEmployee("JK", 100, 400, 500);
  addEmployee("rippy", 2000, 4000, 500);
  
  
  // Sort employees by salary
//   sortEmployeesBySalary();
  
  // Display employees in the table
//   displayEmployees();
  
  // Count employees with salary >= $1,000
  var count = countEmployeesWithSalaryGreaterThan1000();
  document.getElementById("employeeCount").textContent = count;
  