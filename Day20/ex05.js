const users = [
	{ fullname: "Nguyen Van A", age: 20, address: "LangSon" },
	{ fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
	{ fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
	{ fullname: "Nguyen Van D", age: 18, address: "HaNoi" },
	{ fullname: "Nguyen Van E", age: 32, address: "LangSon" },
];

const userList = ["Hoang", "Dung", "Trung", NaN, "Trung"];

const result = userList.indexOf("Dung");
const result2 = userList.indexOf("Dung");
const result3 = users.indexOf({ fullname: "Nguyen Van B", age: 22, address: "BacGiang" });
console.log(result3);

console.log(userList.indexOf(NaN));

/**
 * indexOf()
 * 1. Tìm kiếm và trả về index của phần tử đầu tiên tìm thấy.
 * 2. Nếu không tìm thấy, trả về -1
 * 3. strict equality: Không áp dụng với giá trị là NaN vì NaN !== NaN.
 * 4. Tham số thứ 2 (optional): chỉ định vị trí bắt đầu tìm (nếu không truyền thì tìm từ đầu mảng)
 *
 * lastIndexOf()
 * 1. Tìm kiếm và trả về index của phần tử cuối cùng tìm thấy
 *
 * includes()
 * 1. trả về giá trị boolean dựa vào kết quả tìm kiếm.
 * 2. same-value-zero comparison algorithm: tìm thấy value NaN
 *
 * join()
 * 1. Trả về chuỗi dựa vào ký tự nối được chỉ định.
 * 2. Không thay đổi mảng
 *
 * toString()
 * Tương tự join nhưng không thể chỉ định ký tự nối (mặc định nối các phần tử bởi dấu phẩy)
 *
 * reverse()
 * 1. Đảo ngược mảng
 * 2. Thay đổi mảng gốc
 */

console.log(userList.indexOf("Hoang", 1));

console.log(userList.indexOf("Trung"));
console.log(userList.lastIndexOf("Trung"));
console.log(userList.includes("Dung"));
console.log(userList.includes("Hoa"));
console.log(userList.includes(NaN));

const myString = userList.join("-");
const myString1 = userList.join(); // default: Nối với dấu phẩy
console.log(myString);
console.log(myString1);

const newArr = myString1.split(",");
console.log(newArr);
console.log(newArr.reverse());

const paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptas.";
const words = paragraph.split(" ");
console.log(words);
console.log(words.reverse());
console.log(words.toString());

const list = [1, 2, 3, 4, 5];
console.log(list.toString());
console.log(list);
