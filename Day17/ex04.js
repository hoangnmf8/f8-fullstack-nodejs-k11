// console.log(4 ** 4);
// let a = 10;
// a++;

// a = a + 1;

// ++a;
// console.log(a++);

// let x = 10;

// console.log(x++ + x-- - --x);

// a--;
//  a = a - 1

// let a = 10;
// let b = "10";

// b = b + a;
// b += a; //tuong tu b = b + a

// console.log(b);

// console.log(a === b);

/**
 * == so sánh giá trị.
 * === so sánh giá trị và kiểu dữ liệu.
 */

// console.log(a != b);
// console.log(a !== b);

// console.log(1 == true);
// console.log("" == false);
// console.log("Hoang" > "Dung");

console.log(true && true);
console.log(true && false);
console.log(true && false && true);
console.log("Hoang" && "F8" && 10);

// falsy >< truthy
/**
 * falsy: 0, -0, "", '', ``, null, undefined, NaN, false
 */

/**
 * &&: Toán tử AND
 * - Điều kiện đủ
 * - Kiểm tra giá trị của từng biểu thức từ trái qua phải của &&, khi gặp giá trị falsy thì dừng lại và kết luận: gán giá trị falsy cho result.
 */

// console.log("" || 0 || null || undefined || NaN);

/**
 * ||: Toán tử OR
 * - Điều kiện cần.
 * - Kiểm tra giá trị từng biểu thức từ trái qua phải, khi gặp giá trị truthy thì dừng lại và kết luận: gán giá trị truthy cho result.
 */

// console.log("" || (3 < 2 && "K11"));

if (3 > 2) {
	// logic code thực hiện khi biểu thức điều kiện đúng.
	console.log("3 thì lớn hơn 2");
}

if (true) {
	console.log("luon dung");
}

if (3 % 2 !== 0) {
	console.log("3 khong chia het cho 2");
}

let age = 19;
if (age >= 20) {
	console.log("lay vk dk roi!");
} else {
	console.log("chua du tuoi ket hon!");
}

let celcius = 10;

if (celcius <= 15) {
	console.log("lanh");
} else if (celcius <= 20) {
	console.log("hoi hoi lanh");
} else if (celcius <= 25) {
	console.log("thoai mai");
} else if (celcius <= 30) {
	console.log("hoi nong");
} else {
	console.log("nong");
}
