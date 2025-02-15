setTimeout(function () {
	//logic
}, 2000);

// setTimeout(() => {
// 	console.log("Xin chao");
// }, 2000);

const sum1 = (a, b) => {
	// tinh toan...
	return a + b;
};

const sum2 = (a, b) => a + b;
// input ->(lenh) -> ouput

console.log(sum1(2, 3));
console.log(sum2(10, 20));

/**
 * Arrow function: Hàm sử dụng mũi tên, không có từ khoá khai báo "function".
 * Arrow function có thể bỏ qua từ khoá "return" mà sử dụng () để return.
 */

const getInfor = () => ({
	username: "hoang",
	age: 33,
});

console.log(getInfor());

let count = 0;
const clickCount = () => {
	count = count + 1;
	return count;
};

const increment = (n = 1) => {
	count = count + n;
	console.log(count);
};
