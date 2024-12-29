const arr1 = [1, 2, 3, , , 5];

const mapArr = arr1.map((item) => item * 2);
console.log(mapArr);

function MyArray(...elements) {
	// Tạo một mảng mới từ các phần tử được truyền vào
	this.push(...elements);
}

// Thêm phương thức myForEach cho đối tượng MyArray
MyArray.prototype.myForEach = function (callback) {
	for (let i = 0; i < this.length; i++) {
		if (i in this) {
			// Kiểm tra chỉ mục có tồn tại trong mảng hay không
			callback(this[i], i, this);
		}
	}
};

const numbers = new MyArray(1, 2, 3, 4, 5);

// Thử nghiệm myForEach
numbers.myForEach((number, index) => {
	console.log(`Number ${number} at index ${index}`);
});

// Tạo mảng thưa
const sparseNumbers = new MyArray(...arr1); // Mảng thưa với các phần tử rỗng

sparseNumbers.myForEach((number, index) => {
	console.log(`Number ${number} at index ${index}`);
});
