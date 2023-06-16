// Check if there is data in localStorage when the page loads
window.addEventListener('load', function() {
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      showMainContainer();
    } else {
      showLoginContainer();
    }
  
    var students = JSON.parse(localStorage.getItem('students')) || [];
    students.forEach(function(student) {
      addStudentToTable(student);
    });
  });
  
  // Add event listener to login form submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check if the username and password match the admin account
    var adminData = JSON.parse(localStorage.getItem('admin')) || [];
    var isAdmin = adminData.some(function(admin) {
      return admin.name === username && admin.password === password;
    });
  
    if (isAdmin) {
      localStorage.setItem('isLoggedIn', 'true');
      showMainContainer();
    } else {
      alert('Invalid username or password');
    }
  });
  
  // Add event listener to logout button
  document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.setItem('isLoggedIn', 'false');
    showLoginContainer();
  });
  
  // Add event listener to switch to Register form
  document.getElementById('switchToRegister').addEventListener('click', function() {
    showRegisterContainer();
  });
  
  // Add event listener to switch to Login form
  document.getElementById('switchToLogin').addEventListener('click', function() {
    showLoginContainer();
  });
  
  // Add event listener to register form submission
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var registerUsername = document.getElementById('registerUsername').value;
    var registerPassword = document.getElementById('registerPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    if (registerUsername.trim() === '' || registerPassword.trim() === '' || confirmPassword.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
  
    if (registerPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    // Check if the admin already exists in localStorage
    var adminData = JSON.parse(localStorage.getItem('admin')) || [];
    var isAdminExists = adminData.some(function(admin) {
      return admin.name === registerUsername;
    });
  
    if (isAdminExists) {
      alert('Username already exists');
      return;
    }
  
    // Create a new admin object
    var newAdmin = {
      name: registerUsername,
      password: registerPassword
    };
  
    // Save the new admin data to localStorage
    adminData.push(newAdmin);
    localStorage.setItem('admin', JSON.stringify(adminData));
  
    alert('Registration successful. Please log in.');
  
    showLoginContainer();
  });
  
  // Add event listener to student form submission
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
  
  // Function to show the login container and hide the main container
  function showLoginContainer() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('registerContainer').style.display = 'none';
    document.getElementById('mainContainer').style.display = 'none';
  }
  
  // Function to show the register container and hide the main container
  function showRegisterContainer() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'block';
    document.getElementById('mainContainer').style.display = 'none';
  }
  
  // Function to show the main container and hide the login and register containers
  function showMainContainer() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'none';
    document.getElementById('mainContainer').style.display = 'block';
  }
  
  // Function to add a student to the student list table
  function addStudentToTable(student) {
    var table = document.getElementById('studentList');
    var row = table.insertRow(-1);
    var idCell = row.insertCell(0);
    var nameCell = row.insertCell(1);
    var birthdayCell = row.insertCell(2);
    var phoneNumberCell = row.insertCell(3);
    var deleteCell = row.insertCell(4);
  
    idCell.innerHTML = student.id;
    nameCell.innerHTML = student.name;
    birthdayCell.innerHTML = student.birthday;
    phoneNumberCell.innerHTML = student.phoneNumber;
    deleteCell.innerHTML = '<button onclick="deleteStudent(this)">Delete</button>';
  }
  
  // Function to delete a student from the student list table
  function deleteStudent(button) {
    var row = button.parentNode.parentNode;
    var id = row.cells[0].innerHTML;
  
    // Remove the student from localStorage
    var students = JSON.parse(localStorage.getItem('students')) || [];
    var updatedStudents = students.filter(function(student) {
      return student.id !== id;
    });
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  
    // Remove the row from the student list table
    row.parentNode.removeChild(row);
  }
  