// let i = 0;
// while (i <= 5) {
// 	// block code
// 	console.log(i);
// 	i++;
// }

// do {
// 	console.log(i);
// 	i++;
// } while (i <= 5);

/**
 * do while:
 * Bước 1: Thực hiện block code trong do {}
 * Bước 2: Kiểm tra điều kiện, nếu điều kiện sai -> dừng vòng lặp, nếu điều kiện đúng, thực hiện tiếp block code trong do {}
 */

/**
 * Dùng for khi:
 * - Biết rõ bước nhảy và điều kiện thoát vòng lặp (biết rõ số lần lặp).
 *
 * Dùng while khi:
 * - Bước nhảy phụ thuộc vào logic thực hiện code.
 *
 * Dùng do...while giống như while nhưng luôn thực hiện ít nhất 1 lần (ngay cả khi điều kiện sai).
 */
let i = 0;
while (i <= 10) {
	// if (i % 2 === 0) {
	// 	console.log(i);
	// }
	i++;
	if (i % 2 !== 0) {
		continue;
	}
	console.log(i);
}
