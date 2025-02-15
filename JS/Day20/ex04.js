const users = [
	{ fullname: "Nguyen Van A", age: 20, address: "LangSon" },
	{ fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
	{ fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
	{ fullname: "Nguyen Van D", age: 18, address: "HaNoi" },
	{ fullname: "Nguyen Van E", age: 32, address: "LangSon" },
];

/**
 * Chuyển đổi mảng users sang object gom các thành viên theo address.
 * 
 * 
 * Output:
 * const usersGroupByAddress = {
	BacGiang: [{ fullname: "Nguyen Van B", age: 22, address: "BacGiang" }],
	LangSon: [
		{ fullname: "Nguyen Van A", age: 20, address: "LangSon" },
		{ fullname: "Nguyen Van E", age: 32, address: "LangSon" },
	],
	HaNoi: [
		{ fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
		{ fullname: "Nguyen Van D", age: 18, address: "HaNoi" },
	],
};
 * 
 */

// const usersGroupByAddress = {
// 	BacGiang: [{ fullname: "Nguyen Van B", age: 22, address: "BacGiang" }],
// 	LangSon: [
// 		{ fullname: "Nguyen Van A", age: 20, address: "LangSon" },
// 		{ fullname: "Nguyen Van E", age: 32, address: "LangSon" },
// 	],
// 	HaNoi: [
// 		{ fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
// 		{ fullname: "Nguyen Van D", age: 18, address: "HaNoi" },
// 	],
// };

/**
 * Bước 1: Tạo object rỗng: usersGroupByAddress
 * Bước 2: Vòng lặp
 *  - Kiểm tra xem obj có tỉnh thành của phần tử i chưa?
 *  - Nếu có -> ?
 *  - Nếu chưa có -> ?
 *
 */

const usersGroupByAddress = {};
// let address = "Thừa Thiên Huế"
// usersGroupByAddress['Bac Giang'];
// usersGroupByAddress[address];

for (let i = 0; i < users.length; i++) {
	if (!usersGroupByAddress[users[i].address]) {
		usersGroupByAddress[users[i].address] = [];
	}
	usersGroupByAddress[users[i].address].push(users[i]);
}

// for (value of users) {
// 	if (!usersGroupByAddress[value.address]) {
// 		usersGroupByAddress[value.address] = [];
// 	}
// 	usersGroupByAddress[value.address].push(value);
// }

console.log(usersGroupByAddress);

// const list = ["A", "B", "C"];
// for (item in list) {
// 	console.log(item);
// }
