// console.log(Number.prototype);
// console.log(Math);

// console.log(Math.PI);
// console.log(Math.abs(-10));
// console.log(Math.ceil(10.5)); // lam tron len
// console.log(Math.floor(10.5)); // lam tron xuong
// console.log(Math.round(10.5)); // lam tron den so nguyen gan nhat
// console.log(Math.max(10, 20, 30));
// console.log(Math.min(10, 20, 30));
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(16));
// console.log(Math.random());

/**
 * Tạo hàm random các tháng trong năm (1-12)
 */

// function randomMonth() {
// 	return Math.ceil(Math.random() * 12);
// 	// >0 , <12
// }

// console.log(randomMonth());

// console.log(90071992547401000n + 100n);
// console.log(-90071992547401000n + 1n);

// console.log(Object.create(null));

const userInfor = {
	fullname: "Nguyen Minh Hoang",
	address: "abc",
};

// console.log(userInfor.address ?? "Nguoi dung chua co dia chi!");
// console.log(userInfor.address || "Nguoi dung chua co dia chi!");

/**
 * nullish:
 * - Chỉ kiểm tra giá trị `null` và `undefined`
 */

// userInfor.address = null;
// userInfor.address = undefined;
delete userInfor.address;
// console.log(userInfor);

const account = {
	email: "f8@gmail.com",
	password: "123abc",
	address: undefined,
	sayHello() {
		console.log("xin chao");
	},
};

/** Trả về dữ liệu người dùng (không bao gồm mật khẩu)
 * - Tạo ra object mới bỏ passwort. // ko cần thiết.
 * - account.password = undefined
 * - delete account.password
 */

account.password = undefined;

console.log(JSON.stringify(account));
