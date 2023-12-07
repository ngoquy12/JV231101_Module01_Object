// Khởi tạo một object (đối tượng)
// Cách 1: Object literal

const user = {
  // key: value
  userId: 1,
  userName: "Nguyễn Văn An",
  age: 22,
  isMale: true,
  address: "Hà Nội, VN",
  phoneNumber: "0998773982",
};

const product = {
  productId: 1,
  productName: "MICRO CHO LOA KÉO BLUETOOTH P88 P89",
  price: 1000000,
  image: "",
  from: "Thanh Xuân, Hà Nội",
  createdAt: "06/12/2023",
};

// Thêm key và value vào trong object
product.sell = "10%";
product.quantity = 100;

// Cách xóa key và value trong một object
delete product.image;

console.log(product);

// Cách truy xuất thuộc tính trong đối tượng
// Cách 1: object.key
console.log("Id sản phẩm: ", product.productId);
console.log("Tên sản phẩm: ", product.productName);

// Cách 2: object["key"]
console.log("Giá: ", product["price"]);
console.log("Xuất xứ: ", product["from"]);

// Cách truy xuất các thuộc tính trong object bằng vòng lặp for...in
for (let key in product) {
  console.log("Key: ", key);
  console.log("Value: ", product[key]); // product["product"]
}

// Cách lấy ra các key và value của một đối tượng
console.log("Keys: ", Object.keys(product));
console.log("Values: ", Object.values(product));
console.log("Thông số: ", Object.entries(product));

// Object constructor
function Animal(name, height, weight, color) {
  // Thuộc tính (property)
  this.name = name;
  this.height = height;
  this.weight = weight;
  this.color = color;

  // Phương thức & Hành vi (Method)
  this.getName = function () {
    return this.name;
  };
}

// Thêm key và value vào trong một Object constructor
Animal.prototype.age = 10;

// Khởi tạo đối tượng
const animal1 = new Animal("Con mèo", 30, 10, "orange");
console.log("Tuổi: ", animal1.age);
animal1.tail = "Dài";

const animal2 = new Animal("Con cá", 10, 20, "white");
console.log("Tuổi 2: ", animal2.age);
animal2.oar = "Dày đặc";

console.log(animal1);
console.log(animal2);
