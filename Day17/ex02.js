let username = "hoangnm";
console.log(typeof username);
let email = "hoangnm@fullstack.edu.vn";
let age = 33;
console.log(typeof age);
let isMarried = false; //boolean
console.log(typeof isMarried);

const userInfor = {
	username,
	email: "hoangnm@fullstack.edu.vn",
	age: 33,
	isMarried: false,
};

userInfor.age = 34;
userInfor.major = "DEV";

console.log(userInfor);
console.table(userInfor);
console.log(typeof userInfor);

const studentsK11 = ["Duc Anh", "Do", "Viet Anh", "Minh", "Thang", "Dang", "Trung", "Phong"];
// array

console.log(studentsK11);
console.log(studentsK11.length);
console.log(typeof studentsK11);
console.log(Array.isArray(studentsK11));
console.log(studentsK11[7]);
