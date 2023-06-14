var $ = function (id) {
  return document.getElementById(id);
};

var employees = [];
function Employee(_name, _salary, _reward, _fine) {
  this.name = _name;
  this.salary = _salary;
  this.reward = _reward;
  this.fine = _fine;
  this.calSalary = function () {
    return this.salary + this.reward - this.fine;
  };
}

function insertEmployee(tbody, employee) {
  var newRow = tbody.insertRow();
  for (const key in employee) {
    var element = employee[key];
    if (key === "calSalary") {
      element = employee[key]();
    }
    var cell = newRow.insertCell();
    var textNode = document.createTextNode(element);
    cell.appendChild(textNode);
  }
}

function countEmployees() {
  var count;
  count = employees.filter(function (item) {
    return item.calSalary() >= 1000;
  });
  return count.length;
}

function getEmployeeInformation() {
  var name = $("name").value;
  var salary = $("salary").value;
  var reward = $("reward").value;
  var fine = $("fine").value;
  return {
    name,
    salary,
    reward,
    fine,
  };
}

window.onload = function () {
  $("employee-form").onsubmit = function (e) {
    e.preventDefault();
    var { name, salary, reward, fine } = getEmployeeInformation();
    var employee = new Employee(name, +salary, +reward, +fine);
    employees.push(employee);

    // Sắp xếp mảng employees theo chiều giảm dần của calSalary
    employees.sort(function (a, b) {
      return b.calSalary() - a.calSalary();
    });

    var tbody = $("employee-table").getElementsByTagName("tbody")[0];
    insertEmployee(tbody, employee);

    $("result").textContent = "* Employees > $1000: " + countEmployees();

    this.reset();
  };
};
