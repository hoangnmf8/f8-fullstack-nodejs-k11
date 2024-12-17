/**
 * unshift thêm phần tử vào đầu mảng
 * 1. Thay đổi mảng gốc
 * 2. Trả về độ dài mới của mảng
 *  */

/**
 * shift xoá 1 phần tử ở đầu mảng
 * 1. Thay đổi mảng gốc
 * 2. Trả về phần tử bị xoá
 *  */

/**
 * push thêm phần tử vào cuối mảng
 * 1. Thay đổi mảng gốc.
 * 2. Trả về độ dài mới của mảng.
 *  */

/**
 * pop xoá 1 phần tử ở cuối mảng
 * 1. Thay đổi mảng gốc.
 * 2. Trả về phần tử vừa bị xoá.
 *  */

const users = [
	{ fullname: "Nguyen Van A", age: 20 },
	{ fullname: "Nguyen Van B", age: 22 },
	{ fullname: "Nguyen Van C", age: 21 },
	{ fullname: "Nguyen Van D", age: 18 },
	{ fullname: "Nguyen Van E", age: 32 },
];

/**
 * 1. Tạo mảng đảo ngược chỉ sử dụng các phương thức đã học.
 * 2. Tạo ra mảng mới từ mảng cũ nhưng chỉ giữ lại những user có age >=20
 */

const newUsers = [];
for (let i = users.length - 1; i >= 0; i--) {
	newUsers.push(users[i]);
}
console.log(newUsers);

const newUsers2 = [];
for (let i = 0; i < users.length; i++) {
	newUsers2.unshift(users[i]);
}
console.log(newUsers2);

const newUsers3 = [];
for (let i = 0; i < users.length; i++) {
	if (users[i].age >= 20) {
		newUsers3.push(users[i]);
	}
}

console.log(newUsers3);
