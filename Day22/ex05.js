const size = "XL";
const description = "Mo ta";
const price = 200;
const title = "Ao khoac ni nam";

// product.size = size;

// const product = {
// 	title: "Ao khoac ni nam",
// 	price: 200,
// 	desscription: "Mo ta chi tiet ao...",
//   size: size
// };

// const product = {
// 	title: title,
// 	price: price,
// 	description: description,
// 	size,
// };

// shorthand property

const product = {
	title,
	price,
	description,
	size,
	color: null,
	getPrice: function () {
		console.log(this.price);
	},
};

console.log(product);

// JSON = Javascript Object Notation
/**
 * JSON là chuỗi có cấu trúc.
 */

// let myJSON = JSON.stringify(product);
// console.log(myJSON);

// let myObj = JSON.parse(myJSON);
// console.log(myObj);

// console.log(JSON.parse("{}"));

// Copy object sử dụng JSON
// Đây là cách copy không tối ưu vì không copy được phương thức.
const productCopy = JSON.parse(JSON.stringify(product));

console.log(productCopy);
console.log(productCopy === product);

/**
 * Deep copy, shallow copy, các cách copy và ưu nhược điểm.(học sau)
 */
