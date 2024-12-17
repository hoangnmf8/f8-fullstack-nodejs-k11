const userInfor = {
	username: "hoangnm",
};

const obj = {
	address: "Bac Giang",
};

const userInforCopy = { ...userInfor, password: "123", ...obj };

console.log(userInforCopy);
console.log(userInfor);
console.log(userInfor === userInforCopy);

// Copy object với Spread Operator.
// Spread operator dùng để trải dữ liệu từ object, array ra một vùng khai báo mới.
// Spread dùng khi đưa dữ liệu vào khai báo.

// console.log(userInforCopy.username);
// console.log(userInforCopy.password);
// console.log(userInforCopy.address);

/**
 * Destructuring trong object
 * - Khai báo các biến mới dựa trên các key có sẵn của object,
 * - Nếu không tồn tại key thì value nhận được là undefined.
 */

const { username, ...other } = userInforCopy;
// const { username, password, address } = { username: "hoangnm", password: "123", address: "BG" };
console.log(username);

console.log(other);

/**
 * Rest operator:
 * - Là phần còn lại (phần còn thừa) của một khai báo (có thể xuất hiện cùng cú pháp destructuring hoặc agr của hàm).
 * - Nó chỉ xuất hiện ở cuối các khai báo, dùng khi gom các dữ liệu còn lại vào 1 biến.
 */
