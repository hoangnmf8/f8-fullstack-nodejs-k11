function Person(name) {
	this.name = name;
	this.greet1 = function () {
		console.log(`Hello, my name is ${this.name}`);
	};
}

Person.prototype.greet2 = function () {
	console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John");
const hoang = new Person("Hoang");

console.log(john.greet1 === hoang.greet1);
console.log(john.greet2 === hoang.greet2);

console.log(john.hasOwnProperty("greet1"));
console.log(john.hasOwnProperty("greet2")); // greet2 là phương thức được đặt trong prototype -> Không phải của john.

// console.log(Object.getPrototypeOf(john)); // Dung cach nay
// console.log(john.__proto__); // Khong nen dung cach nay

/**
 * các thuộc tính, phương thức khai báo trong hàm tạo -> khi tạo mới 1 đối tượng cụ thể sẽ có phương thức và thuộc tính riêng.
 * -> Ghi đè, viết lại phương thức, thuộc tính được.
 * -> Tốn bộ nhớ
 *
 * Phương thức gắn vào prototype là phương thức được chia sẻ chung.
 * -> Tiết kiệm bộ nhớ
 * -> Kế thừa được, dễ quản lý tập trung
 * -> Nếu thay đổi phương thức gắn ở prototype thì sẽ ảnh hưởng đến tất cả các đối tượng được tạo mà không ghi đè được.
 */

const infor = { title: "abc" };
console.log(infor);
console.log(infor.hasOwnProperty("toString"));
console.log(infor.hasOwnProperty("title"));
