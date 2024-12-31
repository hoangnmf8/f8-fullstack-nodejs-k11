let str = "F8 - Hoc lap Hoc trinh";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

/**
 * Dùng để chuẩn hoá chuỗi dữ liệu đầu vào của người dùng.
 * Dùng để so sánh, tìm kiếm khi không phân biệt hoa thường.
 *
 */

console.log(str.charAt(0));
console.log(typeof str.charAt(100));

// includes trả về boolean value
console.log(str.includes("Hoc"));
console.log(str.includes("Hoc", 15));

console.log(str.indexOf("Hoc", 9));
console.log(str.lastIndexOf("Hoc"));

/**
 * Viết hàm đếm keyword trong chuỗi str.
 *
 * function (str, keyword) {
 * return số lần xuất hiện keyword trong str (không phân biệt hoa thường)
 * }
 *
 * Bước 1: Tạo ra biến đếm = 0
 * Bước 2: Chuyển đổi cả 2 chuỗi về cùng 1 dạng: lowercase.
 * Bước 3: Tìm theo indexOf
 *  - Nếu indexOf !== -1 thì:
 *    - Tăng đếm++
 *    - Bỏ qua keyword.length ký tự và tiếp tục.
 * Bước 4: return đếm
 */
