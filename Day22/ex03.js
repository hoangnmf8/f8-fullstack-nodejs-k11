// let myNumber = 10;
// myNumber = 20;
// console.log(myNumber);

// const userInfor = {
// 	email: "hoangnm@gmail.com",
// };

// const user2Infor = userInfor;
// user2Infor.password = "123456";

// console.log(user2Infor);

// console.log(userInfor);

// Đây là cách copy object sai vì không thay đổi địa chỉ ô nhớ.

const userInfor = {
	email: "hoangnm@gmail.com",
	password: "111111",
};

const userInfor2 = {
	password: "123456",
	age: 30,
};

const newUserInfor = Object.assign(userInfor, userInfor2, { age: 32 });

/** Object.assign()
 * - Gộp object.
 * - Object.assign(target, source)
 * - Trùng thuộc tính thì sẽ ghi đè, lấy giá trị từ object source.
 * - Có thể gộp nhiều hơn 2 object.
 * - Object target chính là object bị gộp và thay đổi.
 * - Nếu muốn copy object thì có thể assign với target object là object rỗng "{}".
 *  */

console.log(userInfor);
console.log(newUserInfor);
console.log(userInfor === newUserInfor);

const userInforA = Object.assign({}, userInfor);

console.log(userInforA);

console.log(userInforA === userInfor);
userInforA.age = 100;
console.log(userInforA, userInfor);

/**
 * Khi so sánh tuyết đối (===) với reference type thì là đang so sánh giá trị và địa chỉ ô nhớ.
 */
