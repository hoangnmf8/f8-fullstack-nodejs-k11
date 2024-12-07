function welcome(username) {
	console.log("Hello, " + username);
	console.log(`Hello, ${username}`); // template string
	return;
	// code sau return trong scope se khong thuc hien nua.
	console.log("hello");
}

// welcome("F8");
// const result = welcome("Tran Duy Hung");
// console.log(result);

/**
 * 1. Hàm là một khối code có chức năng riêng được đóng gói và tái sử dụng.
 * 2. Hàm không return thì trả về undefined.
 */

// function funcA() {
// 	return 10;
// }

// function funcB() {
// 	let resultA = funcA();
// 	return resultA + 20;
// }

// console.log(funcB());

// function funcX(callback) {
// 	// thuc hien mot vai cong viec.
// 	callback();
// }

// function taskA() {
// 	console.log("Mua may tinh moi");
// }

// function taskB(callback) {
// 	console.log("Dang di kiem tien");
// 	setTimeout(callback, 2000);
// }

// function muaOto() {
// 	console.log("Doi y, di mua oto");
// }

// taskB(taskA);
// taskB(muaOto);

// taskB();
// taskA();

/**
 * Declaration Function: Hàm khai báo tường minh.
 * Callback Function: Hàm được truyền vào hàm khác như một đối số.
 * Anonymous function: Hàm ẩn danh.
 * Expression function: Hàm được sử dụng gán cho biến.
 */

setTimeout(function () {
	// cong viec
	console.log("viec X");
}, 2000);

const car = {
	title: "MG ZS",
	color: "red",
	run: function () {
		// run
	},
};

/** Hàm gán cho thuộc tính trong object thường được gọi là phương thức.
 * Khai báo phương thức có thể sử dụng anonymous function.
 */

const sum = function (a, b) {
	return a + b;
};

console.log(sum(2, 3));
