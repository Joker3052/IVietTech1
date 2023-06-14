// Khai báo mảng chứa thông tin nhân viên
let employees = [];

// Hàm thêm nhân viên từ form vào mảng employees
function addEmployeeFromForm() {
    // Lấy giá trị từ các trường input
    let firstName = document.getElementById('f_name').value;
    let lastName = document.getElementById('l_name').value;
    let age = document.getElementById('age').value;
    let salary = document.getElementById('salary').value;

    // Tạo đối tượng nhân viên
    let employee = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        salary: salary
    };

    // Thêm nhân viên vào mảng employees
    employees.push(employee);

    // Hiển thị mảng employees theo yêu cầu

    // Sắp xếp mảng employees theo năm sinh (tăng dần)
    let sortedByAge = employees.slice().sort((a, b) => a.age - b.age);

    // Hiển thị mảng sortedByAge trong tableByAgeBody
    let tableByAgeBody = document.getElementById('tableByAgeBody');
    tableByAgeBody.innerHTML = '';

    sortedByAge.forEach(employee => {
        let row = tableByAgeBody.insertRow();
        row.innerHTML = `
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.age}</td>
            <td>${employee.salary}</td>
            <td>${new Date().getFullYear() - employee.age}</td>
        `;
    });

    // Sắp xếp mảng employees theo độ dài fullname (giảm dần)
    let sortedByFullName = employees.slice().sort((a, b) => b.firstName.length + b.lastName.length - a.firstName.length - a.lastName.length);

    // Hiển thị mảng sortedByFullName trong tableByFullNameBody
    let tableByFullNameBody = document.getElementById('tableByFullNameBody');
    tableByFullNameBody.innerHTML = '';

    sortedByFullName.forEach(employee => {
        let row = tableByFullNameBody.insertRow();
        row.innerHTML = `
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.age}</td>
            <td>${employee.salary}</td>
            <td>${employee.firstName} ${employee.lastName}</td>
        `;
    });

    // In ra số người có năm sinh lớn hơn 2000
    // let filteredEmployees = employees.filter(employee => employee.age > 2000);
    let filteredEmployees = employees.filter(employee => new Date().getFullYear() - employee.age > 2000);
    console.log(`Số người có năm sinh lớn hơn 2000: ${filteredEmployees.length}`);
}
