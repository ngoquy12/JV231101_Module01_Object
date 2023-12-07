// // lấy ra thời gian hiện tại
// let today = new Date();
// console.log(today); // Wed Dec 06 2023 20:18:54 GMT+0700 (Giờ Đông Dương)

// // Lấy ra năm
// let year = today.getFullYear(); // 23 023 2023 => Lời bắt đầu đếm của các ngôn ngữ: 1/1/1970

// let month = today.getMonth() + 1; // Bắt đầu từ tháng 0 đến tháng 11
// if (month > 0 && month < 10) {
//   month = `0${month}`;
// }

// // Lấy ra giờ
// let hours = today.getHours();

// // Lấy ra phút
// let minutes = today.getMinutes();

// // Lấy ra giây
// let seconds = today.getSeconds();

// // Giờ:phút:giây

// let day = today.getDate();
// if (day > 0 && day < 10) {
//   day = `0${day}`;
// }

const clock = () => {
  // Lấy ra thời gian hiện tại
  const now = new Date();

  // Lấy  ra giờ
  let hours = now.getHours().toString().padStart(2, 0);

  // Lấy ra phút
  let minutes = now.getMinutes().toString().padStart(2, 0);

  // Lấy ra giây
  let seconds = now.getSeconds().toString().padStart(2, 0);

  document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;

  // Trả vè chuyển định dạng thời gian
  // return `${hours}:${minutes}:${seconds}`;
};

setInterval(clock, 1000);
