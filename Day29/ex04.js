// setTimeout(function () {
// 	console.log("delay 1");
// }, 1000);

// setTimeout(function () {
// 	console.log("delay 2");
// });

// console.log("show data");

const arr1 = [1, 2, 3, 4, 5];

/**
 * Giải thuật:
 * Bước 1: Hàm showItem in ra phần tử thứ i.
 * Bước 2: Tăng biến i
 * Bước 3: Gọi lại showItem ở trong setTimeout(showItem, 1000) với điều kiện i < arr.length
 *
 *
 *  */

let i = 0;

// const myTimeout = function (callback) {
// 	return setTimeout(callback, 1000);
// };

// function showItem() {
// 	if (i < arr1.length) {
// 		console.log(arr1[i]);
// 		i++;
// 		myTimeout(showItem);
// 	}
// }

// showItem();

// const arr = [1, 2, 3, 4, 5];
// const log = (n, arr) => {
// 	if (n === arr.length) return;
// 	console.log(arr[n++]);
// 	const myTimeOut = setTimeout(function () {
// 		log(n, arr);
// 		clearTimeout(myTimeOut);
// 	}, 1000);
// };

// log(0, arr);

setInterval(function () {
	const currentTime = new Date();
	let year = currentTime.getFullYear();
	let month = currentTime.getMonth();
	let date = currentTime.getDate();
	let second = currentTime.getSeconds();

	// logic lấy giờ, phút, giây
	let content = `${date}/${month + 1}/${year}`;
	document.write(second);
	console.log(second);
	document.close();
}, 1000);
