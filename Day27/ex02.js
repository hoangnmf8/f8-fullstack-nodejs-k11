console.log(Number("123"));
console.log(Number("abc"));
console.log(Number.prototype);

// console.log((123.456).toFixed(2));
// console.log(typeof (123.456).toFixed(2));
// console.log((123.456).toFixed(0));
// console.log((123.456).toFixed(NaN));
// console.log((123.456).toFixed(2.4));
// console.log((123.456).toFixed(100));
// console.log(Number.isFinite(123.456));
// console.log(Number.isInteger(123.456));

console.log(Number.isNaN("123")); // -> kiểm tra luôn
console.log(isNaN("123")); // -> ép kiểu trước, sau đó kiểm tra.

console.log(Number.isNaN("abc"));
console.log(isNaN("abc"));

/**
 * B1: Number("abc") -> NaN
 * B2:
 */

/**
 * NaN
 * - typeof NaN =  Number
 * - NaN không bằng chính nó
 * - isNaN
 *  */

console.log(Number.prototype);

const obj = Object.create(
	{},
	{
		address: { value: "HN", enumerable: false },
		age: { value: 30, enumerable: true },
	}
);
console.log(obj);
console.log(Number.MAX_VALUE);
Number.MAX_VALUE = 10;
console.log(Number.MAX_VALUE);

let a = 123;
console.log(String(123));
console.log(Number(123).toString());
console.log((123.345).toString());
console.log(a.toString());
console.log(123 + "");
console.log((0).toString());
console.log(Number(""));

console.log(Boolean(123));
console.log(Boolean(0));
console.log(Boolean(-100));

console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(true + false);
