// regex: Regular expression (Biểu thức chính quy)
// Là các chuỗi ký tự đã được format theo một chuẩn nhất định để so sánh với
// một chuỗi (email, số điện thoại, mật khẩu...)

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

let email1 = "quy@gmail.com";
let email2 = "abc...";

console.log(validateEmail(email1));
console.log(validateEmail(email2));

if (!validateEmail(email1)) {
  console.log("Email không đúng định dạng");
} else {
  console.log("Email đúng định dạng");
}

/**
 * Format định dạng tiền tệ Việt Nam
 * @param {*} money Chuỗi tiền tệ cần format (Tuy nhiên, nó phải có kiểu là number)
 * @returns Trả về chuỗi định dạng. Ví dụ: 100000 => 1.000.000 đ
 * Auth: NVQUY(06/12/2023)
 */
const formatMoney = (money) => {
  let formatMoney = money.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });

  return formatMoney;
};

console.log(formatMoney("12000000"));
console.log(formatMoney(1550000000));

const convertChar = (char, string) => {
  // Chuyển đổi chuỗi thành mảng
  let converArr = string.split("");

  for (let i = 0; i < converArr.length; i++) {
    if (converArr[i].toUpperCase() === char) {
      converArr[i] = converArr[i].toUpperCase();
    }
  }
  // Chuyển đổi một mảng thành một chuỗi
  let convertToString = converArr.join("");

  return convertToString;
};

console.log(convertChar("A", "lamlamlinh"));
