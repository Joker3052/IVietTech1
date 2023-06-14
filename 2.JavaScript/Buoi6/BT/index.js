// function OK() {
//     var selectedKhoi = document.getElementById("Khoi").value;
//     var infoForm = document.querySelector(".info_form");

//     // Ẩn tất cả các trường nhập liệu
//     hideAllInputs();

//     // Hiển thị các trường nhập liệu tương ứng với khối được chọn
//     if (selectedKhoi === "A") {
//         document.getElementById("Toan").style.display = "block";
//         document.getElementById("Hoa").style.display = "block";
//         document.getElementById("Sinh").style.display = "block";
//     } else if (selectedKhoi === "C") {
//         document.getElementById("Van").style.display = "block";
//         document.getElementById("Su").style.display = "block";
//         document.getElementById("Dia").style.display = "block";
//     } else if (selectedKhoi === "D") {
//         document.getElementById("Toan").style.display = "block";
//         document.getElementById("Anh").style.display = "block";
//         document.getElementById("Van").style.display = "block";
//     }

//     // Hiển thị div chứa các trường nhập liệu
//     infoForm.style.display = "block";
// }

function resetForm() {
    hideAllInputs();
    document.querySelector(".info_form").style.display = "none";
}

function hideAllInputs() {
    var inputs = document.querySelectorAll(".info_form input[type='text']");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.display = "none";
    }
}

function calculate() {
    var selectedKhoi = document.getElementById("Khoi").value;

    var subjects = {
        'A': ['Toan', 'Hoa', 'Sinh'],
        'C': ['Van', 'Su', 'Dia'],
        'D': ['Toan', 'Anh', 'Van']
    };

    var selectedSubjects = subjects[selectedKhoi];
    var totalScore = 0;

    for (var i = 0; i < selectedSubjects.length; i++) {
        var subjectInput = document.getElementById(selectedSubjects[i]);
        var score = parseFloat(subjectInput.value);

        if (!isNaN(score)) {
            totalScore += (i < 3) ? score * 2 : score;
        }
    }

    var resultElement = document.getElementById("result");
    resultElement.textContent = "Tổng điểm chia 10: " + (totalScore / 10).toFixed(1);
}