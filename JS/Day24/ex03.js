const students = [
	{ id: 1, fullname: "Nguyen Manh Huy", age: 18 },
	{ id: 2, fullname: "Nguyen Minh Hoang", age: 10 },
	{ id: 2, fullname: "Nguyen Anh Hoang", age: 10 },
	{ id: 3, fullname: "Vu Huy Do", age: 21 },
	{ id: 4, fullname: "Dang Nhat Minh", age: 22 },
	{ id: 4, fullname: "Vu Huy Minh", age: 24 },
	{ id: 4, fullname: "Nhung", age: 24 },
	{ id: 4, fullname: "Nguyen Hoang Minh Khang", age: 24 },
	{ id: 4, fullname: "Nguyen Vu Dang Ha Cao Nguyen", age: 24 },
];

/** Sắp xếp danh sách học viên theo tên (dựa vào bảng alphabet).
 * Nếu trùng tên, sắp xếp theo họ và tên đệm.
 */

// function sortByFullname(data) {
// 	data.sort((a, b) => {
// 		// So sanh ten
// 		const aFirstName = a.fullname.split(" ").slice(-1)[0];
// 		const bFirstName = b.fullname.split(" ").slice(-1)[0];
// 		// console.log(aFirstName, bFirstName);
// 		if (aFirstName < bFirstName) {
// 			return -1;
// 		} else if (aFirstName > bFirstName) {
// 			return 1;
// 		} else {
// 			// So sanh ten dem
// 			const aLastName = a.fullname.split(" ").slice(0, -1).join(" ");
// 			const bLastName = b.fullname.split(" ").slice(0, -1).join(" ");
// 			if (aLastName < bLastName) return -1;
// 		}
// 	});
// }

// sortByFullname(students);
// console.table(students);

const sortStudent = (data) => {
	data.sort((a, b) => {
		arr1 = a.fullname.split(" ");
		arr2 = b.fullname.split(" ");

		aLastName = arr1.pop();
		bLastName = arr2.pop();

		if (aLastName > bLastName) return 1;
		if (aLastName < bLastName) return -1;

		aFirstMiddle = arr1.join(" ");
		bFirstMiddle = arr2.join(" ");

		if (aFirstMiddle > bFirstMiddle) return 1;
	});
};
// Bai nay sai

sortStudent(students);
console.table(students);
