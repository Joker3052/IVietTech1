// even num
function getEvenNumbers(array) {
    var evenNumbers = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i]);
        }
    }

    return evenNumbers;
}
// odd num
function getOddNumbers(array) {
    var oddNumbers = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            oddNumbers.push(array[i]);
        }
    }

    return oddNumbers;
}
// tổng max second + min second
// function SumMax2Min2(array) {
//     // Kiểm tra nếu mảng không đủ 2 phần tử
//     if (array.length < 2) {
//       return "Mảng không đủ số lượng phần tử để tính toán.";
//     }
  
//     // Sắp xếp mảng theo thứ tự tăng dần
//     array.sort(function(a, b) {
//       return a - b;
//     });
  
//     // Lấy giá trị lớn thứ 2
//     var secondLargest = array[array.length - 2];
//   console.log(secondLargest);
//     // Lấy giá trị nhỏ thứ 2
//     var secondSmallest = array[1];
//   console.log(secondSmallest);
//     // Tính tổng của số lớn thứ 2 và nhỏ thứ 2
//     var sum = secondLargest + secondSmallest;
  
//     return sum;
//   }
function SumMax2Min2(array) {
  // Kiểm tra nếu mảng không đủ 2 phần tử
  if (array.length < 2) {
    return "Mảng không đủ số lượng phần tử để tính toán.";
  }

  // Sử dụng Set để loại bỏ các số trùng nhau
  var uniqueArray = Array.from(new Set(array));
  // Kiểm tra nếu mảng không đủ 2 phần tử sau khi loại bỏ các số trùng nhau
  if (uniqueArray.length < 2) {
    return "Mảng không đủ số lượng phần tử để tính toán sau khi loại bỏ các số trùng nhau.";
  }

  // Sắp xếp mảng theo thứ tự tăng dần
  uniqueArray.sort(function (a, b) {
    return a - b;
  });
  // Lấy giá trị lớn thứ 2
  var secondLargest = uniqueArray[uniqueArray.length - 2];

  // Lấy giá trị nhỏ thứ 2
  var secondSmallest = uniqueArray[1];

  // Tính tổng của số lớn thứ 2 và nhỏ thứ 2
  var sum = secondLargest + secondSmallest;

  return sum;
}
 //chẵn phải lẻ trái
function sortArrayEvenOdd(array) {
  // Lọc ra các số chẵn và số lẻ
  var evenNumbers = array.filter(num => num % 2 === 0);
  var oddNumbers = array.filter(num => num % 2 !== 0);

  // Sắp xếp các số chẵn và số lẻ theo thứ tự tăng dần
  evenNumbers.sort((a, b) => a - b);
  oddNumbers.sort((a, b) => a - b);

  // Kết hợp lại mảng mới với số chẵn đứng trước số lẻ
  var sortedArray = evenNumbers.concat(oddNumbers);

  return sortedArray;
}
  //vị trí lớn nhất
  function getPmax(array) {
    // Kiểm tra nếu mảng rỗng
    if (array.length === 0) {
      return "Mảng không có phần tử.";
    }
  
    var max = array[0]; // Giả sử phần tử đầu tiên là lớn nhất
    var maxIndex = 0; // Vị trí của phần tử lớn nhất
  
    for (var i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
        maxIndex = i;
      }
    }
  
    return maxIndex;
  }
  //
  function getPmin(array) {
    // Kiểm tra nếu mảng rỗng
    if (array.length === 0) {
      return "Mảng không có phần tử.";
    }
  
    var min = array[0]; // Giả sử phần tử đầu tiên là nhỏ nhất
    var minIndex = 0; // Vị trí của phần tử nhỏ nhất
  
    for (var i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
        minIndex = i;
      }
    }
  
    return minIndex;
  }
  

// Function tính giá trị trung bình
function calculateAverage(array) {
    var sum = array.reduce((total, num) => total + num, 0);
    return sum / array.length;
}

// Function sắp xếp mảng theo thứ tự tăng dần
function sortArrayAscending(array) {
    return array.slice().sort((a, b) => a - b);
}

// Function sắp xếp mảng theo thứ tự giảm dần
function sortArrayDescending(array) {
    return array.slice().sort((a, b) => b - a);
}

// Function tìm giá trị lớn nhất
function findMaxValue(array) {
    return Math.max(...array);
}

// Function tìm giá trị nhỏ nhất
function findMinValue(array) {
    return Math.min(...array);
}

// Function chèn giá trị trung bình vào vị trí có chỉ số là 4
function insertAverage(array, average) {
    var newArray = array.slice();
    newArray.splice(4, 0, average);
    return newArray;
}

// Function lọc các giá trị lớn hơn giá trị trung bình
function filterGreaterThanAverage(array, average) {
    return array.filter(num => num > average);
}

// Function lọc các giá trị nhỏ hơn giá trị trung bình
function filterLessThanAverage(array, average) {
    return array.filter(num => num < average);
}

function reset() {
    document.getElementById("your-array").value = "none";
    document.getElementById("average").value = "none";
    document.getElementById("sorted-asc").value = "none";
    document.getElementById("sorted-desc").value = "none";
    document.getElementById("max").value = "none";
    document.getElementById("min").value = "none";
    document.getElementById("inserted").value = "none";
    document.getElementById("greater-than-average").value = "none";
    document.getElementById("less-than-average").value = "none";
    document.getElementById("even-num").value = "none";
    document.getElementById("odd-num").value = "none";
    document.getElementById("sum2").value = "none";
    document.getElementById("Pmax").value = "none";
    document.getElementById("Pmin").value = "none";
}

window.onload = function () {
    document.getElementById("input-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn chặn việc gửi form
    
        // Lấy giá trị nhập vào
        var input = document.getElementById("array").value;
    
        // Chia chuỗi thành mảng các số
        var numbers = input.split(",");
    
        if (numbers.length < 7) {
            if (numbers.some(num => !Number.isInteger(Number(num)))) {
                document.getElementById("invalid-feedback").style.display = "block";
                document.getElementById("integer-feedback").style.display = "block";
                reset();
                return;
            } else {
                document.getElementById("invalid-feedback").style.display = "block";
                document.getElementById("integer-feedback").style.display = "none";
                reset();
                return;
            }
        } else if (numbers.length >= 7 && numbers.some(num => !Number.isInteger(Number(num)))) {
            document.getElementById("invalid-feedback").style.display = "none";
            document.getElementById("integer-feedback").style.display = "block";
            reset();
            return;
        }
        document.getElementById("invalid-feedback").style.display = "none";
        document.getElementById("integer-feedback").style.display = "none";
    
        // Chuyển đổi mảng thành kiểu số nguyên
        var integerArray = numbers.map(num => parseInt(num));
        
        // Tính giá trị trung bình
        var average = calculateAverage(integerArray);
        
        // Sắp xếp mảng theo thứ tự tăng dần
        var sortedAscArray = sortArrayAscending(integerArray);
        
        // Sắp xếp mảng theo thứ tự giảm dần
        var sortedDescArray = sortArrayDescending(integerArray);
        
        // Tìm giá trị lớn nhất
        var max = findMaxValue(integerArray);
        
        // Tìm giá trị nhỏ nhất
        var min = findMinValue(integerArray);
        
        // Chèn giá trị trung bình vào vị trí có chỉ số là 4
        var insertedArray = insertAverage(integerArray, average);
        
        // Lọc các giá trị lớn hơn giá trị trung bình
        var greaterThanAverage = filterGreaterThanAverage(integerArray, average);
        
        // Lọc các giá trị nhỏ hơn giá trị trung bình
        var lessThanAverage = filterLessThanAverage(integerArray, average);
        
        //even num
        var even = getEvenNumbers(integerArray);
        
        //odd num
        var odd = getOddNumbers(integerArray);
       
        //max2 min x????
        var maxmin2Array = numbers.map(num => parseInt(num));
        var maxmin2 = SumMax2Min2(maxmin2Array);
        
        // P max
        var pmax = getPmax(integerArray);
        
        //P min
        var pmin = getPmin(integerArray);
        
        var evenodd = sortArrayEvenOdd(integerArray);
        console.log(integerArray);
        // Hiển thị kết quả
        document.getElementById("your-array").value = numbers;
        document.getElementById("average").value = average.toFixed(2);
        document.getElementById("sorted-asc").value = sortedAscArray;
        document.getElementById("sorted-desc").value = sortedDescArray;
        document.getElementById("max").value = max;
        document.getElementById("min").value = min;
        document.getElementById("inserted").value = insertedArray;
        document.getElementById("greater-than-average").value = greaterThanAverage;
        document.getElementById("less-than-average").value = lessThanAverage;
        document.getElementById("even-num").value = even;
        document.getElementById("odd-num").value = odd;
        document.getElementById("sum2").value = maxmin2;
        document.getElementById("Pmax").value = pmax;
        document.getElementById("Pmin").value = pmin;
        document.getElementById("even-odd").value=evenodd;
    });
}