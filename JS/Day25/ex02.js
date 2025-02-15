function PersonA(name, address) {
	this.name = name;
	this.address = address;

	this.getInfor = function () {
		console.log(`name: ${name}, address: ${address}`);
	};
}

const student1 = new PersonA("Hoang", "BG");
// console.log(Object.getPrototypeOf(student1));

const myObj = { title: "abc" };
console.log(myObj);

// const Cart = {
// 	products: [
// 		{ id: 1, title: "san pham A", price: 200 },
// 		{ id: 2, title: "san pham B", price: 200 },
// 	],
// 	userId: "123",
// 	getTotal: function () {},
// };

function Cart(products, userId) {
	(this.products = products), (this.userId = userId);
	this.getTotal = function () {
		// logic tinh tien
		let total = this.products.reduce((acc, cur) => {
			acc += cur.price * cur.quantity;
			return acc;
		}, 0);
		return total;
	};
}

const products = [
	{ id: 1, title: "tomato", quantity: 4, price: 1 },
	{ id: 2, title: "apple", quantity: 2, price: 2 },
	{ id: 3, title: "tomato", quantity: 4, price: 1 },
];

const cartOfHoang = new Cart([{ id: 4, title: "tivi sony", price: 200, quantity: 2 }], "123");
const cartOfMinh = new Cart(products, "145");

console.log(cartOfHoang.getTotal());
console.log(cartOfMinh.getTotal());
