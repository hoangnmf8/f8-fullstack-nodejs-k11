const arr1 = [1, 2, 3, 5, 6, 10];

const result1 = arr1.filter((item) => item % 2 === 0);
// const result1 = arr1.filter(function (item) {
//   return item % 2 === 0
// });
console.log(result1);

const result2 = arr1.filter((item) => item > 100);
console.log(result2);

const products = [
	{ id: 1, title: "san pham A", price: 200, quantity: 2, discount: 0.1 },
	{ id: 2, title: "san pham B", price: 200, quantity: 2, discount: 0.2 },
	{ id: 3, title: "san pham C", price: 300, quantity: 2, discount: 0.3 },
	{ id: 4, title: "san pham D", price: 400, quantity: 2, discount: 0.05 },
];

/**
 * Tạo mảng chứa các sản phẩm giảm giá từ đủ 20% trở lên.
 */

const hotSaleProducts = products.filter((item) => item.discount >= 0.2);
console.log(hotSaleProducts);

// Tính tổng giá trị đơn hàng với pay = price * quantity * (1 - discount)
let total = 0;
products.forEach((item) => {
	total += item.price * item.quantity * (1 - item.discount);
});

console.log(total);

/**
 * 1. Tạo ra mảng mới với các phần tử là tên sản phẩm
 * 2. Tạo ra mảng mới với mỗi sản phẩm thêm 1 thuộc tính ghi lại tổng tiền của từng loại sản phẩm. (amount)
 *
 * */
// const newProduct = products.map((p) => {
// 	p.amount = p.price * p.quantity * (1 - p.discount);
// 	return p;
// });

// console.log(products);
// console.log(newProduct);

// Nếu không khai báo biến mới cho mỗi item, cách này sẽ thay đổi luôn mảng ban đầu.

//Output:
// products = [
// 	{ id: 1, title: "san pham A", price: 200, quantity: 2, discount: 0.1, amount: 360 },
// 	{ id: 2, title: "san pham B", price: 200, quantity: 2, discount: 0.2, amount: 320 },
// 	{ id: 3, title: "san pham C", price: 300, quantity: 2, discount: 0.3, amount: 420 },
// 	{ id: 4, title: "san pham D", price: 400, quantity: 2, discount: 0.05, amount: 760 },
// ];

const newProduct = products.map((item) => {
	const newItem = { ...item, amount: item.price * item.quantity * (1 - item.discount) };
	return newItem;
});

console.log(newProduct);
