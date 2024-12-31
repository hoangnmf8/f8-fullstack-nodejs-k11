let str1 = "F8 - Hoc lap trinh de di lam";
console.log(typeof str1);
console.log(str1[1]);
console.log(str1[-1]);
console.log(str1[100]);
console.log((str1[1] = "9"));
console.log(str1);

let objStr = new String("Hello");

console.log(typeof objStr);
console.log(objStr);

let str2 = String(123);
console.log(typeof str2);

/**
 * Các thao tác chuỗi cơ bản
 * Các thao tác biến đổi chuỗi
 * Các thao tác tìm kiếm, truy vấn.
 * Thao tác thay thế, sửa.
 */

let f8Slogan = "F8 - Hoc lap trinh de di lam";

function reverseStr(str) {
	let stringReversed = "";
	// for (let i = 0; i < f8Slogan.length; i++) {
	//   stringReversed += str[str.length - 1 - i];
	// }

	for (let i = f8Slogan.length - 1; i >= 0; i--) {
		stringReversed += str[i];
	}
	return stringReversed;
}
console.log(reverseStr(f8Slogan));

/**
 * 1. Thực hiện viết hàm tạo ra một chuỗi mới là chuỗi đảo ngược của chuỗi đưa vào.
 * 2. Viết hàm kiểm tra xem chuỗi đưa vào có phải chuỗi đối xứng không?
 * VD: "abcba", "HjH", "abba"
 */

function checkPalindrome(str) {
	for (let i = 0; i < str.length / 2; i++) {
		// Bước 1: Kiểm tra xem 2 phần tử đối xứng có = nhau không.
		// Bước 2: Nếu bằng nhau, đi đến lần lặp tiếp theo, nếu không bằng nhau -> return false

		if (str[i] !== str[length - i - 1]) {
			return false;
		}
	}

	return true;
}
