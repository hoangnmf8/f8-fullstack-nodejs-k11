let str1 = " Hello JavaScript!!!     ";

/**
 * substring()
 * - Không nhận chỉ số âm (nếu chỉ số là âm thì chuyển về 0).
 * - Nếu chỉ số end lớn hơn length thì cắt đến hết chuỗi.
 * - Nếu tham số start lớn hơn tham số end thì đổi chỗ 2 tham số.
 * - Khi tham số truyền vào không phải số hợp lệ thì convert về 0
 *
 * slice()
 * - Chấp nhận chỉ số âm (đếm từ cuối chuỗi)
 * - Nếu start > end -> ""
 * - Nếu giá trị không phải số -> 0
 */

// console.log(str1.substring(3));
// console.log(str1.substring(0, 5));
// console.log(str1.substring(-1, 5));
// console.log(str1.substring(-1, 100));
// console.log(str1.substring(5, 2));
// console.log(str1.substring(NaN, 2));
// console.log(str1);

console.log(str1.substring(3), "//", str1.slice(3));
console.log(str1.substring(0, 5), "//", str1.slice(0, 5));
console.log(str1.substring(-1, 5), "//", str1.slice(-1, 5));
console.log(str1.substring(-1, 100), "//", str1.slice(-1, 100));
console.log(str1.substring(5, 2), "//", str1.slice(5, 2));
console.log(str1.substring(NaN, 2), "//", str1.slice(NaN, 2));
console.log(str1);

console.log(str1.repeat(5));
console.log(str1.trim());

/**
 * Bài toán điển hình về chuỗi:
 * - Tìm kiếm.
 * - Làm sạch dữ liệu.
 * - Biến đổi chuỗi.
 * - Validation
 * - Kết hợp với mảng để xử lý phân loại, nhóm, đánh dấu...
 */

const regex1 = /hello/i;
const regex2 = "/hello/i";
console.log(typeof regex1);
console.log(typeof regex2);
