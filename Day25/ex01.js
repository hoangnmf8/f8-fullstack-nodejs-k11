/**
 * Function constructor
 */

function PersonA(name, address) {
	this.name = name;
	this.address = address;

	this.getInfor = function () {
		console.log(`name: ${name}, address: ${address}`);
	};
}

class PersonB {
	constructor(name, address) {
		this.name = name;
		this.address = address;

		this.getInfor = function () {
			console.log(`name: ${name}, address: ${address}`);
		};
	}
}

const student1 = new PersonA("Dung", "Ca Mau");
console.log(student1);

const myInfor = new Object({ fullname: "nguyen van a" });

console.log(myInfor);

PersonA.prototype.sayHello = function () {
	console.log(`Xin chao ban ${this.name} den tu ${this.address}`);
};

student1.sayHello();
student1.getInfor();

/**
 *
 */

let ageOfHoang = 30;
let ageOfDung = new Number(30);
let myString = "F8 - Hoc lap trinh";

console.log(typeof ageOfHoang);
console.log(typeof ageOfDung);
console.log(myString.toUpperCase());

/**
 * String -> string
 * Number -> number
 * Boolean -> boolean
 * Date -> datetime
 * Regex -> regex
 * Array -> array
 * Object -> object
 */

console.log(typeof null);
console.log(typeof undefined);

let myStr = new String("F8 - Hoc lap trinh");

console.log(typeof myStr);
console.log(myStr);

// Wrapper Object

/**
 * Không nên dùng hàm khởi tạo cho các giá trị primitive type nếu không thực sự cần thiết:
 * Viết dài dòng
 * Tốn bộ nhớ
 * Giảm hiệu suất
 */

console.log(myStr.valueOf());
