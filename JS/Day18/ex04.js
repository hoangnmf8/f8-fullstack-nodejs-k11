if (true) {
	// codinational trả về true.
}

// if (3 > 2) {
// 	console.log(`3 thi lon hon 2`);
// }

// if (month === 0) {
// 	console.log("thang 1");
// }

// let myNumber = "Hoang";
// if (myNumber % 2 === 1) {
// 	console.log("So le");
// } else {
// 	console.log("Chua biet");
// }

// if (myNumber % 2 === 1) {
// 	console.log("So le");
// } else if (myNumber % 2 === 0) {
// 	console.log("So chan");
// } else {
// 	console.log("Chua biet");
// }

// const userEmail = prompt("Nguoi dung nhap email");

function validationEmail(email) {
	// kiem tra
	/**
	 * Kiem tra email phai toi thieu 1 ky tu
	 */

	if (email.length < 1) {
		console.log("Truong email la bat buoc");
		return false;
	}
}

// validationEmail(userEmail);

// function calcBMI() {
// 	const weigth = parseFloat(prompt("Nhap can nang (kg)"));
// 	const heigth = parseFloat(prompt("Nhap chieu cao (m)"));

// 	// Trung: sau khi parseFloat thì chỉ có 2 trường hợp: hoặc là số thực, hoặc là NaN.
// 	// Check <=0 thì báo không hợp lệ.

// 	console.log(weigth, heigth);
// 	// Bước 1: validation

// 	// Bước 2: Tính BMI

// 	// Bước 3: Viết cấu trúc điều khiển

// 	// Bước 4: Kết luận
// }

// calcBMI();

// testValue: 0, -100, "", "Hoang", null, undefined, true, NaN,
// NaN không bằng chính nó.

/**
 * Viết hàm kiểm tra 3 giá trị nhập vào từ bàn phím có phải là số đo 3 cạnh của 1 tam giác không?
 */

/** Toán tử 3 ngôi: */
// codinational ? {} : {};

let myAge = 33;
console.log(myAge >= 20 ? "Du tuoi lay vk" : "Chua du tuoi lay vkl");
let GPA = 3.5;
console.log(GPA < 2 ? "Hoc lai" : "Qua môn");
