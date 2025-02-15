// const obj1 = {
// 	email: "hoang@gmail.com",
// 	password: "123456",
// 	address: "HN",
// 	age: undefined,
// 	greet() {
// 		console.log("Xin chao");
// 	},
// };

// let myJSON = JSON.stringify(obj1);
// console.log(myJSON);
// console.log(JSON.parse(myJSON));

// '{"email":"hoang@gmail.com","password":"123456","address":"HN"}'

// const arr1 = [1, 2, 3, 4, 5];
// console.log(JSON.stringify(arr1));
// console.log(JSON.parse(JSON.stringify(arr1)));
// console.log(JSON.stringify([]));
// console.log(JSON.stringify(123));
// console.log(JSON.stringify(null));
// console.log(JSON.stringify(NaN));
// console.log(JSON.stringify(true));
// console.log(
// 	JSON.stringify(function sum(a, b) {
// 		return a + b;
// 	})
// );

// console.log(JSON.stringify(undefined));
// console.log(JSON.stringify(Infinity));
// console.log(JSON.stringify(-Infinity));
// console.log(JSON.stringify(Math.random()));

// console.log(a);
const a = 10;
export const b = 20;
export const infor = {
	fullname: "Nguyen Minh Hoang",
	greet() {
		console.log("hello");
	},
};

// export default function sum(a, b) {
// 	return a + b;
// }
export default sum;

function sum(a, b) {
	return a + b;
}

// export default const sum = (a, b) => {
// 	return a + b;
// };

// export default infor.greet;

// export { sum };
