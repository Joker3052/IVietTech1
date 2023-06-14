let age = prompt("Nhập tuổi của bạn:");
if (age !== null) {
  alert("thành phương " +":"+ name );
} else {
    alert("Bạn đã hủy nhập liệu.");
}
window.onbeforeunload = function() {
    return "Trang web này đang cố gắng hiển thị các hộp thoại bổ sung. Bạn có chắc chắn muốn rời khỏi trang?";
  };
  