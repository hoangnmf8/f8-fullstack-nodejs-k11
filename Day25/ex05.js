const person = Object.create(Object.prototype, {
	name: { value: "Hoang", writable: true, enumerable: true, configurable: true },
	age: { value: 30, writable: false, enumerable: true, configurable: true },
	address: { value: "BG" },
});

console.log(person.name); // 'John'
person.name = "Mike"; // Có thể thay đổi
console.log(person.name); // 'Mike'

console.log(person.age); // 30
person.age = 35; // Không thay đổi vì writable là false
console.log(person.age); // 30

console.log(person);

person.address = "HN";
console.log(person.address);

for (const key in person) {
	console.log(key);
}

/** Khi không thêm các đặc tính tuỳ chọn thì:
 * writable: có thể ghi đè (default: false)
 * enumerable: xuất hiện trong for...in loop (default: false)
 * configurable: có thể thiết lập lại 2 thuộc tính phía trên (default: false)
 */

const arr1 = [1, 2, null, NaN, undefined, , , 3, 4];

arr1.forEach((item) => {
	console.log(item);
});

function sum(a, b, c) {
	console.log(a, b, c);
}
sum(2, 3);

const resultMap = arr1.map((item) => item * 2);
console.log(resultMap);

for (let i = 0; i < arr1.length; i++) {
	console.log(arr1[i], arr1[i] * 2);
}

for (item of arr1) {
	console.log(item, item * 2);
}

// Kiểm tra cụ thể trường hợp mảng thưa (mảng có phần tử empty)

function MyArray(...elements) {
	// Tạo một mảng mới từ các phần tử được truyền vào
	this.push(...elements);
}

// Thêm phương thức myForEach cho đối tượng MyArray
MyArray.prototype.myForEach = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this);
	}
};

const numbers = new MyArray(1, 2, 3, 4, 5);

numbers.myForEach((number, index) => {
	console.log(`Number ${number} at index ${index}`);
});

// Viết lại phương thức filter, map, reduce
