// const arr1 = [1, 2, 3, 4];

/**
 * arr.reduce(callback, initialValue)
 *
 * callback = (accumulator, currentValue, index, arr) => {}
 */

// let total = 0;

// for (let i = 0; i < arr1.length; i++) {
// 	total = total + arr1[i];
// }

// console.log(total);

// const result = arr1.reduce((acc, cur, index, array) => {
// 	console.log(`acc: ${acc}; cur: ${cur}; index: ${index}; array: ${array}`);
// 	return acc + cur;
// });
// console.log(result);

const arr2 = ["tomato", "banana", "hotdog", "orange", "apple", "orange", "banana", "banana"];

/**
 * Bài 1: Đếm số lần xuất hiện của các thực phẩm trong danh sách.
 *
 * Bài 2: Tạo mảng mới loại bỏ các thực phẩm trùng lặp.
 *
 * // Output:
 * foodList = {
 *  tomato: 1,
 *  banana: 3,
 * ...
 * }
 */

const foodList = arr2.reduce((acc, cur) => {
	// console.log(`acc: `, acc);
	// console.log(`cur: `, cur);
	// acc[cur] = 0;
	// logic:

	// - Nếu key trong object đã xuất hiện rồi thì tăng lên 1.

	// - Nếu chưa tồn tại key(loại đồ ăn) trong object thì thêm key vào với value: 1

	// Cach 1
	// if(!acc[cur]) {
	//   acc[cur] = 1
	// } else {
	//   acc[cur]++
	// }

	// Cach 2
	// acc[cur] ? acc[cur]++ : (acc[cur] = 1);

	// Cach 3
	acc[cur] = (acc[cur] || 0) + 1;

	return acc;
}, {});

console.log(foodList);
