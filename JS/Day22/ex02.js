const myCar = {
	brand: "Mitsubishi",
	name: "Xforce",
	color: "white",
	version: 2024,
};

// Vòng lặp for...in

for (let key in myCar) {
	console.log(`Giá trị của ${key} là ${myCar[key]}`);
}

// option chaining (?.)
console.log(myCar?.price);
console.log(myCar.price ? myCar.price : "Không có thuộc tính này");

// Phương thức
// Tạo ra mảng các keys của object
console.log(Object.keys(myCar));

// Tạo ra mảng các values của object
console.log(Object.values(myCar));

console.log(Object.entries(myCar));

// const user = {
// 	email,
// 	password,
// 	comparePassword,
// };

const whiteList = { f8: "https://f8.com", gg: "https://gg.com" };

Object.freeze(whiteList);
// Đóng băng các thuộc tính và value, ko cho thay đổi value.

whiteList.f8 = "deepweb.com";
console.log(whiteList);
