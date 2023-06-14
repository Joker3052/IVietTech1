const tabHeaders = document.querySelectorAll('.tab-header li');
const tabContents = document.querySelectorAll('.tab-content');

tabHeaders.forEach((tabHeader, index) => {
  tabHeader.addEventListener('click', () => {
    // Xóa class active của tất cả các tab-header
    tabHeaders.forEach(tabHeader => {
      tabHeader.classList.remove('active');
    });
    // Thêm class active cho tab-header được click
    tabHeader.classList.add('active');

    // Ẩn tất cả các tab-content
    tabContents.forEach(tabContent => {
      tabContent.style.display = 'none';
    });
    // Hiển thị tab-content tương ứng với tab-header được click
    tabContents[index].style.display = 'block';
  });
});
