var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css';
document.head.appendChild(link);

// Constructor function cho đối tượng sách có giá
function BookWithPrice(title, author, publishYear, numPages) {
    this.title = title;
    this.author = author;
    this.publishYear = publishYear;
    this.numPages = numPages;
    this.price = this.calculatePrice();
  }
  
  // Phương thức tính giá sách
  BookWithPrice.prototype.calculatePrice = function() {
    if (this.numPages > 200) {
      return this.numPages * 0.37;
    } else {
      return this.numPages * 0.4;
    }
  };
  
  // Khởi tạo khi trang được tải
  window.onload = function() {
    // Khởi tạo một mảng để lưu trữ thông tin về sách
    var books = [];
  
    // Hàm xử lý sự kiện khi form được submit
    function addBook(event) {
      event.preventDefault();
  
      // Lấy giá trị từ các input
      var titleInput = document.getElementById('b_tillte');
      var authorInput = document.getElementById('b_author');
      var publishYearInput = document.getElementById('b_publish');
      var numPagesInput = document.getElementById('num_pages');
  
      var title = titleInput.value;
      var author = authorInput.value;
      var publishYear = publishYearInput.value;
      var numPages = numPagesInput.value;
  
      // Kiểm tra nếu các trường input không được điền
      if (!title || !author || !publishYear || !numPages) {
        alert('Vui lòng điền đầy đủ thông tin về sách');
        return;
      }
      else if(publishYear<=0 || numPages<0)
      {
        alert('publishYear hoặc numPages không hợp lệ');
        return;
      }
  
      // Tạo đối tượng sách có giá bằng constructor function kế thừa
      var book = new BookWithPrice(title, author, publishYear, numPages);
  
      // Thêm sách vào mảng books
      books.push(book);
  
      // Reset giá trị của input
      titleInput.value = '';
      authorInput.value = '';
      publishYearInput.value = '';
      numPagesInput.value = '';
  
      // Cập nhật bảng hiển thị danh sách sách
      updateTable();
    }
  
    // Hàm cập nhật bảng hiển thị danh sách sách
    function updateTable() {
      var tableBody = document.getElementById('tableOfBooks');
      tableBody.innerHTML = '';
  
      // Duyệt qua mảng books và tạo các hàng trong bảng
      for (var i = 0; i < books.length; i++) {
        var book = books[i];
  
        var row = document.createElement('tr');
  
        var titleCell = document.createElement('td');
        titleCell.textContent = book.title;
  
        var authorCell = document.createElement('td');
        authorCell.textContent = book.author;
  
        var publishYearCell = document.createElement('td');
        publishYearCell.textContent = book.publishYear;
  
        var numPagesCell = document.createElement('td');
        numPagesCell.textContent = book.numPages;
  
        var priceCell = document.createElement('td');
        priceCell.textContent = book.price;

        var deleteCell = document.createElement('td'); // Tạo ô mới cho nút xóa
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';
        deleteButton.setAttribute('data-index', i); // Lưu chỉ mục của sách trong thuộc tính data-index
        deleteButton.addEventListener('click', deleteBook); // Gán sự kiện click cho nút xóa

        deleteCell.appendChild(deleteButton);
  
        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(publishYearCell);
        row.appendChild(numPagesCell);
        row.appendChild(priceCell);
        row.appendChild(deleteCell);
  
        tableBody.appendChild(row);
      }
      var tableBody = document.getElementById('table1');
        tableBody.style.display = 'table-row-group';
       var resultTable = document.getElementById('search1');
        resultTable.style.display = 'table-row-group';

      books.sort(function(a, b) {
        return b.price - a.price;
      });
      countprice() ;
      updateTable();
      // Tạo phần tử HTML để hiển thị kết quả
      var resultElement = document.createElement('p');
    //   resultElement.textContent = 'Số lượng sách có giá lớn hơn $57 và xuất bản trước năm 1980: ' + count; 
      console.log(">$57 and before 1980:"+count);
       // Thêm phần tử kết quả vào div có id là "$57"
    // var resultContainer = document.getElementById('$57');
    // resultContainer.appendChild(resultElement);
      // Thêm phần tử kết quả vào trang web
      var container = document.querySelector('.container');
      container.appendChild(resultElement);
    }
    function countprice() {
        var count = 0;
      for (var i = 0; i < books.length; i++) {
        var book = books[i];
        if (book.price > 57 && book.publishYear < 1980) {
          count++;
        }
      } 
        var employeeCountElement = document.getElementById("$57");
        employeeCountElement.innerHTML = " greater than $57and before 1980: "+count;
      }
      //ham delete
      function deleteBook(event) {
        var button = event.target;
        var index = button.getAttribute('data-index'); // Lấy chỉ mục sách từ thuộc tính data-index
        books.splice(index, 1); // Xóa sách khỏi mảng books
    
        updateTable(); // Cập nhật lại bảng hiển thị danh sách sách
    }
  // Hàm tìm kiếm sách theo tác giả
function searchBooks() {
    var searchInput = document.getElementById('searchAuthor').value;
    var searchResult = document.getElementById('searchResult');
    searchResult.innerHTML = '';
  
    var matchedBooks = books.filter(function(book) {
      return book.author.toLowerCase().includes(searchInput.toLowerCase());
    });
  
    if (matchedBooks.length === 0) {
      searchResult.textContent = 'No books found for the author: ' + searchInput;
    } else {
      var resultTable = document.createElement('table');
      resultTable.className = 'table table-striped table-dark';
      resultTable.style.display = 'table-row-group';
      var tableHeader = document.createElement('thead');
      var headerRow = document.createElement('tr');
  
      var titleHeader = document.createElement('th');
      titleHeader.textContent = 'Title';
      var authorHeader = document.createElement('th');
      authorHeader.textContent = 'Author';
      var publishYearHeader = document.createElement('th');
      publishYearHeader.textContent = 'Publish Year';
      var numPagesHeader = document.createElement('th');
      numPagesHeader.textContent = 'Number of Pages';
      var priceHeader = document.createElement('th');
      priceHeader.textContent = 'Price';
  
      headerRow.appendChild(titleHeader);
      headerRow.appendChild(authorHeader);
      headerRow.appendChild(publishYearHeader);
      headerRow.appendChild(numPagesHeader);
      headerRow.appendChild(priceHeader);
  
      tableHeader.appendChild(headerRow);
      resultTable.appendChild(tableHeader);
  
      var tableBody = document.createElement('tbody');
  
      for (var i = 0; i < matchedBooks.length; i++) {
        var book = matchedBooks[i];
  
        var row = document.createElement('tr');
  
        var titleCell = document.createElement('td');
        titleCell.textContent = book.title;
  
        var authorCell = document.createElement('td');
        authorCell.textContent = book.author;
  
        var publishYearCell = document.createElement('td');
        publishYearCell.textContent = book.publishYear;
  
        var numPagesCell = document.createElement('td');
        numPagesCell.textContent = book.numPages;
  
        var priceCell = document.createElement('td');
        priceCell.textContent = book.price;
  
        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(publishYearCell);
        row.appendChild(numPagesCell);
        row.appendChild(priceCell);
  
        tableBody.appendChild(row);
      }
  
      resultTable.appendChild(tableBody);
      searchResult.appendChild(resultTable);
    }
  }
  
  // Gán sự kiện click cho nút Search
  var searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', searchBooks);
  
    // Gán sự kiện submit cho form
    var form = document.querySelector('form');
    form.addEventListener('submit', addBook);
  };
  