// JavaScript constructor function to initialize employee information
function Employee(name, basicSalary, reward, fine) {
    this.name = name;
    this.basicSalary = basicSalary;
    this.reward = reward;
    this.fine = fine;
  }
  
  // JavaScript function to calculate salary using inheritance
  Employee.prototype.calculateSalary = function () {
    return this.basicSalary + this.reward - this.fine;
  };
  
  // Array to store employee objects
  var employees = [];
  
  // Function to add employees into the array
  function addEmployee(name, basicSalary, reward, fine) {
    var employee = new Employee(name, basicSalary, reward, fine);
    employees.push(employee);
  }
  
  // Function to arrange the array in descending order by salary
  function sortBySalaryDescending() {
    employees.sort(function (a, b) {
      return b.calculateSalary() - a.calculateSalary();
    });
  }
  
  // Function to display the array elements on a web page
  function displayEmployees() {
    var table = document.getElementById("employeeTable");
    table.innerHTML = ""; // Clear the table
  
    for (var i = 0; i < employees.length; i++) {
      var employee = employees[i];
      var row = table.insertRow(-1);
  
      var nameCell = row.insertCell(0);
      var basicSalaryCell = row.insertCell(1);
      var rewardCell = row.insertCell(2);
      var fineCell = row.insertCell(3);
      var totalSalaryCell = row.insertCell(4);
  
      nameCell.innerHTML = employee.name;
      basicSalaryCell.innerHTML = employee.basicSalary;
      rewardCell.innerHTML = employee.reward;
      fineCell.innerHTML = employee.fine;
      totalSalaryCell.innerHTML = employee.calculateSalary();
    }
  }
  
  // Function to count the number of employees with salary >= $1,000 and print results to a web page
  function countEmployeesWithHighSalary() {
    var count = 0;
  
    for (var i = 0; i < employees.length; i++) {
      if (employees[i].calculateSalary() >= 1000) {
        count++;
      }
    }
  
    var employeeCountElement = document.getElementById("employeeCount");
    employeeCountElement.innerHTML = count;
  }
  function addEmployeeFromForm() {
    var name = document.getElementById("name").value;
    var basicSalary = parseInt(document.getElementById("basic").value);
    var reward = parseInt(document.getElementById("reward").value);
    var fine = parseInt(document.getElementById("fine").value);
  
    addEmployee(name, basicSalary, reward, fine);
    sortBySalaryDescending();
    displayEmployees();
    countEmployeesWithHighSalary();
  
    // Reset input values
    document.getElementById("name").value = "";
    document.getElementById("basic").value = "";
    document.getElementById("reward").value = "";
    document.getElementById("fine").value = "";
  }
    