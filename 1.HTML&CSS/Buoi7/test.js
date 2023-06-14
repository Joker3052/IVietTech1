const tabHeaders = document.querySelectorAll('.tab-header li');
const tabContents = document.querySelectorAll('.tab-content div');

tabHeaders.forEach((tabHeader, index) => {
  tabHeader.addEventListener('click', () => {
    // Remove active class from all tab headers
    tabHeaders.forEach(tabHeader => {
      tabHeader.classList.remove('active');
    });
    // Add active class to clicked tab header
    tabHeader.classList.add('active');

    // Hide all tab contents
    tabContents.forEach(tabContent => {
      tabContent.style.display = 'none';
    });
    // Show tab content corresponding to clicked tab header
    tabContents[index].style.display = 'block';
  });
});