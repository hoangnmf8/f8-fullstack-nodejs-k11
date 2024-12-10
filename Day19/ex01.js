// i = index

// for (let i = 0; i >= 0 && i <= 10; i++) {
// 	// block code
// 	console.log(i);
// }

// Bước 1. Khai báo i = 0.
// Bước 2. Kiểm tra điều kiện đúng (điều kiện sai thì thoát vòng lặp).
// Bước 3. Thực hiện khối lệnh.
// Bước 4. Cập nhật i và lặp lại bước 2

let i = 0;
for (;;) {
	if (i > 10) break;
	console.log(i);
	i++;
}

/** Thực hành viết hàm vẽ hình tam giác với n và char.
 *
 * VD: n = 5, char = "#"
 *
 * #
 * ##
 * ###
 * ####
 * #####
 */

function printTriangle(n, char) {
	let content = "";
	for (let i = 1; i <= n; i++) {
		console.log((content += char));
	}
}

printTriangle(5, "K");

/**
 * &
 * &&
 * &&&
 * &&&&
 * &&&&&
 */
/**
 * Viết hàm in ra tất cả các số chia hết cho i từ 0 đến n, i và n nhập từ bàn phím.
 */

function divisibleNumber(i, n) {
	// validation i, n
	// kiểm tra các trường hợp đặc biệt.
	// đi vào logic chính

	for (let index = 1; index <= n; index++) {
		if (index % i === 0) {
			console.log(index);
		}
	}
}

divisibleNumber(4, 100);

/** Viết hàm nhận vào n là số nguyên dương bất kỳ, in ra các số nguyên tố từ 2 đến n */

// Kiểm tra xem i có phải số nguyên tố không?
function checkPrimeNumber(n) {
	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			// số nguyên tố chỉ chia hết cho 1 và chính nó => chia hết cho 1 số không là chính nó thì sẽ không phải là số nguyên tố.
			return false;
		}
	}
	return true;
}

function printPrime(n) {
	// In ra số nguyên tố
	for (let i = 2; i <= n; i++) {
		checkPrimeNumber(i) && console.log(i);
	}
}

printPrime(100);

/** Viết hàm in ra bảng cửu chương từ 1 đến 10 */
function printMultiplicationTable() {}

printMultiplicationTable();
