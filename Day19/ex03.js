const students = [
	{ fullname: "Nguyen Viet Anh", age: 22, pay: 20000 },
	{ fullname: "Nguyen Manh Huy", age: 17, pay: 1000000 },
	{ fullname: "Dang Nhat Minh", age: 22, pay: 200000 },
	{ fullname: "Nguyen Thanh Trung", age: 18, pay: 300000 },
];

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);

// for (let i = 0; i < students.length; i++) {
// 	console.log(students[i]);
// }

// for (item of students) {
// 	console.log(item);
// }

/**
 * 1. Tìm và in ra thông tin học viên dưới 20 tuổi.
 * 2. Tính tổng tiền quỹ dựa vào dữ liệu "pay"
 *
 * */

// for (item in students) {
// 	console.log(item);
// }

total = 0;
for (let i = 0; i < students.length; i++) {
	console.log(students[i].pay);
	// return total
}

let username = "Nguyen Minh Hoang";

for (let i = 0; i < username.length; i++) {
	console.log(username[i]);
}

/** Cho đoạn văn paragraph, đếm số từ của đoạn văn. */

const paragraph =
	"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis optio illo ipsa deleniti, deserunt possimus minus autem eos debitis! Saepe porro ullam vero iusto, doloribus vitae quibusdam quia nostrum! Consequuntur!";

function countWords(p) {
	let count = 1;
	for (let i = 0; i < p.length; i++) {
		if (p[i] === " ") {
			count++;
		}
	}
	return count;
}

console.log(countWords(paragraph));

console.log("Hoang" > "Hoan");
