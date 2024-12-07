console.log(typeof String(123));
console.log(String(null));
console.log(String(undefined));

console.log(String([{ id: 1, title: "Tivi Sony" }]));
// JSON = JavaScript Object Notation

console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
// NaN = Not a Number
console.log(typeof Number(undefined));
console.log(Number(""));
console.log(Number("Hoang"));
console.log(Number("123"));

// false ~ 0 ~ "" ~ -0 ~null
/** Ép kiểu tường minh: chủ động dùng phương thức, hàm hoặc cách nào đó để chuyển đổi kiểu dữ liệu */

/** Ép kiểu ngầm định: Trong biểu thức điều kiện, biểu thức tính toán... JS tự động ép kiểu cho các vế của biểu thức về cùng kiểu dữ liệu trước khi thực hiện biểu thức.  */

console.log(1 + "1");
console.log("1" + 1);
console.log(+"1");
console.log(2 / "2");
console.log(2 * "2");
console.log(true + false); //( 1 + 0)
// truefalse
// 1, 0

console.log([, , ,] + [1, 2, 3]); //,,1,2,3
console.log([1, 2, 3] + [4, 5, 6]);
1, 2, 34, 5, 6;
console.log(String([1, 2, 3]));
console.log(String([1, 2, 3, "Hoang", { id: 1, title: "Tivi" }]));
