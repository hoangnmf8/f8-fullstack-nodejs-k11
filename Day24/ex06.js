const users = [
	{ fullname: "Nguyen Van A", age: 20, address: "LangSon" },
	{ fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
	{ fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
	{ fullname: "Nguyen Van D", age: 18, address: "HaNoi" },
	{ fullname: "Nguyen Van E", age: 32, address: "LangSon" },
];

// Nhóm các học viên cùng address sử dụng reduce

// Output:
const usersGroupByAddress = {
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
