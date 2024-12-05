function sum(a, b) {
	console.log(a + b);
	return a + b;
	// Hàm không return sẽ trả về undefined
}

// NaN = Not a Number

sum(3, 2);

let result = sum(10, 20);
console.log(result);

/**
 * +, -, *, /, %, **
 */

/**
 * 1. Viết hàm trả về chu vi hình chữ nhật có cạnh a, b. (a + b) * 2
 * 2. Viết hàm trả về diện tích chữ nhật có cạnh a, b. ( a * b)
 * 3. Viết hàm trả về diện tích hình tròn có bán kính r và chấp nhận PI ~ 3.14 (Pi * R * R)
 */

// const confirmValue = window.confirm("Lam vk anh nhe!");
// console.log(confirmValue);

// const promptValue = window.prompt("Ban ten gi?");
// console.log(promptValue);

function circReactangle(a, b) {
	let result = (a + b) * 2;
	console.log(result);
	console.log(typeof result);
	return (a + b) * 2;
}

const a = +window.prompt("Moi nhap a");
const b = +window.prompt("Moi nhap b");

console.log(typeof a, typeof b);
alert("Chu vi hinh chu nhat la: " + circReactangle(a, b));
console.log("Nghi giai lao");
