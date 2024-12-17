const userInfor = {
	email: "hoang@gmail.com",
	age: 33,
	username: "thayhoangjs",
};

// Khai báo với object literal

// key - value

// Key thì có thể là string hoặc symbol
// Value thì nhận bất cứ kiểu dữ liệu nào, khi value là function thì ta gọi đó là phương thức.

console.log(userInfor);
console.log(typeof userInfor);

// Primitive data type
// Object data type: function, array, object, null

const obj = new Object({
	email: "hoang@gmail.com",
	password: "123456",
	fullname: "Nguyễn Minh Hoàng",
	learn: function (lesson, time) {
		console.log(`${this.fullname} học ${lesson} luc ${time}`);
	},
});

// Khai báo với từ khoá `new`
console.log(obj);

// Có nhiều cách để tạo object: sử dụng constructor, class, assign,...

// Sử dụng từ khoá `this` trong object để trỏ đến chính object đó.
obj.learn("JS cơ bản", "trưa nay");

obj.avatar = "https://anhdaidien.jpg";
console.log(obj);

obj["Sở thích"] = ["ăn", "ngủ"];
console.log(obj);

let myKey = "hobbies";

obj[myKey] = ["reading book", "coding"];

console.log(obj);

const arrayInfor = [
	["username", "hoangnm"],
	["email", "hoang@gmail.com"],
	["password", "123456"],
];

/**
 * Chuyển đổi mảng đa cấp thành object
 */

// Output:

// const objInfor = {
// 	username: "hoangnm",
// 	email: "hoang@gmail.com",
// 	password: "123456",
// };

const objInfor = {};

for (let i = 0; i < arrayInfor.length; i++) {
	objInfor[arrayInfor[i][0]] = arrayInfor[i][1];
}

for (item of arrayInfor) {
	objInfor[item[0]] = item[1];
}

console.log(objInfor);
