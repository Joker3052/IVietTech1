// Check if there is data in localStorage when the page loads
window.addEventListener('load', function() {
    var students = JSON.parse(localStorage.getItem('students')) || [];
    students.forEach(function(student) {
      addStudentToTable(student);
    });
  });
  
  // Add event listener to form submission
  document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve form values
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var birthday = document.getElementById('birthday').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
  
    // Validate form fields
    if (id.trim() === '') {
      alert('ID is required');
      return;
    }
  
    if (name.trim() === '') {
      alert('Name is required');
      return;
    }
    if (name.length < 5 || name.length > 15) {
      alert('Name must be between 5 and 15 characters long');
      return;
    }
  
    var today = new Date();
    var birthDate = new Date(birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 18) {
      alert('Age must be 18 or above');
      return;
    }
  
    if (phoneNumber.trim() === '') {
      alert('Phone Number is required');
      return;
    }
    if (phoneNumber.length !== 10) {
      alert('Phone Number must be 10 digits long');
      return;
    }
  
    // Check if a student with the same ID exists in localStorage
    var students = JSON.parse(localStorage.getItem('students')) || [];
    var existingStudent = students.find(function(student) {
      return student.id === id;
    });
  
    if (existingStudent) {
      // Update the existing student's information
      existingStudent.name = name;
      existingStudent.birthday = birthday;
      existingStudent.phoneNumber = phoneNumber;
  
      // Find the corresponding row in the student list table and update its content
      var table = document.getElementById('studentList');
      var rows = table.getElementsByTagName('tr');
      for (var i = 1; i < rows.length; i++) { // Start from index 1 to skip header row
        var cells = rows[i].getElementsByTagName('td');
        if (cells[0].innerHTML === id) {
          cells[1].innerHTML = name;
          cells[2].innerHTML = birthday;
          cells[3].innerHTML = phoneNumber;
          break;
        }
      }
    } else {
      // Create a new student object
      var studentData = {
        id: id,
        name: name,
        birthday: birthday,
        phoneNumber: phoneNumber
      };
      
      // Add the new student to localStorage
      students.push(studentData);
      localStorage.setItem('students', JSON.stringify(students));
      
      // Add the new student to the student list table
      addStudentToTable(studentData);
    }
  
    // Clear the form inputs
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('birthday').value = '';
    document.getElementById('phoneNumber').value = '';
  });
  
  // Function to add a student to the student list table
  function addStudentToTable(student) {
    var table = document.getElementById('studentList');
    var row = table.insertRow(-1);
    var idCell = row.insertCell(0);
    var nameCell = row.insertCell(1);
    var birthdayCell = row.insertCell(2);
    var phoneNumberCell = row.insertCell(3);
    var deleteCell = row.insertCell(4); // New delete cell
    
    idCell.innerHTML = student.id;
    nameCell.innerHTML = student.name;
    birthdayCell.innerHTML = student.birthday;
    phoneNumberCell.innerHTML = student.phoneNumber;
    deleteCell.innerHTML = '<button onclick="deleteStudent(this)">Delete</button>'; // Delete button
  }
  
  // Function to delete a student row
function deleteStudent(button) {
    var row = button.parentNode.parentNode; // Get the row element
    var id = row.cells[0].innerHTML; // Get the student ID from the first cell
  
    // Remove the row from the table
    var table = document.getElementById('studentList');
    table.deleteRow(row.rowIndex);
  
    // Remove the student from localStorage
    var students = JSON.parse(localStorage.getItem('students')) || [];
    students = students.filter(function (student) {
      return student.id !== id;
    });
    localStorage.setItem('students', JSON.stringify(students));
  }