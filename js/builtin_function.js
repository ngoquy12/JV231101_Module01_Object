// setTimeout(callback function, delay)
// callack function là một hàm và được gọi thông qua đối số của hàm khác
// Hàm không có tên thì được gọi là hàm ẩn danh
// hàm setTimeout() thì chỉ chạy một lần duy nhất

// setTimeout(() => {
//   alert("Đăng nhập thành công. Chuyển trang.");
// }, 3000); // 3000ms <=> 3s

// setInterval()
setInterval(() => {
  console.log("Chạy");
}, 2000);
