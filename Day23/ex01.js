const myStudents = ["Do", "Duc Anh", "Trung", "Phong"];
// console.log(myStudents.slice(2));
// console.log(myStudents.slice(2, 3));
// console.log(myStudents.slice(2, -2));
// console.log(myStudents.slice(3, 1));
// console.log(myStudents);

// const result1 = myStudents.splice(1, 100);
// console.log(result1);
// console.log(myStudents);

// const arr1 = [1, 2, 3, 4];

// const result2 = arr1.splice(2, 1, 100, "F8", "Hoc lap trinh");
// console.log(result2);
// console.log(arr1);

/**
 * slice
 * - arr.slice(start, [end])
 * - Phương thức tạo ra một mảng mới cắt từ mảng cũ.
 * - Không thay đổi mảng ban đầu.
 * - Nhận chỉ số âm, index = -1 từ vị trí cuối cùng của mảng.
 */

/**
 * splice
 * - arr.splice(start, [deleteCount], item1...itemN)
 * - Thay đổi mảng gốc.
 * - Start nhận chỉ số âm,
 * - deleteCount nhận các giá trị nguyên dương hoặc 0.
 * - item1...itemN là các phần tử được thêm vào mảng bắt đầu từ vị trí start
 */

const myArr = ["Hoang", 0, null, "F8", "Hoc lap trinh", 100, undefined];

// Cach 1
for (let i = 0; i < myArr.length; i++) {
	if (!myArr[i]) {
		myArr.splice(i, 1);
		// console.log(myArr);
		// console.log(i);
		i--;
	}
}

console.log(myArr);

// Cach 2:
const newArr = [];
for (let i = 0; i < myArr.length; i++) {
	if (myArr[i]) {
		newArr.push(myArr[i]);
	}
}

console.log(newArr);
