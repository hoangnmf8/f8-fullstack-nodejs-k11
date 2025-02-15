const membersK11 = ["Duc Anh", "Minh", "Do", "Thang", "Viet Anh", "Dang", "Phong"];

console.log(membersK11.unshift("ABC"));
membersK11.unshift();
console.log(membersK11);

/**
 * unshift thêm phần tử vào đầu mảng
 * 1. Thay đổi mảng gốc
 * 2. Trả về độ dài mới của mảng
 *  */

/**
 * shift xoá 1 phần tử ở đầu mảng
 * 1. Thay đổi mảng gốc
 * 2. Trả về phần tử bị xoá
 *  */

/**
 * push thêm phần tử vào cuối mảng
 * 1. Thay đổi mảng gốc.
 * 2. Trả về độ dài mới của mảng.
 *  */

/**
 * pop xoá 1 phần tử ở cuối mảng
 * 1. Thay đổi mảng gốc.
 * 2. Trả về phần tử vừa bị xoá.
 *  */

// membersK11.unshift("X", "Y", { username: "F8" });
// console.log(membersK11);

// membersK11.shift();
// console.log(membersK11.shift());
// console.log(membersK11);

const list = [1, 2, 3, 4];
console.log(list.shift());
console.log(list);

console.log(list.push("Hoang", "Trung"));
console.log(list);

console.log(list.pop());
console.log(list);
