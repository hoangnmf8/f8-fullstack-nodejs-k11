const Pi = 3.14;

// const: contanst
/**
 * 1. Phải gán giá trị ngay khi khai báo.
 * 2. Thường sử dụng cho các giá trị bất biến.
 * 3. Khi thay đổi giá trị cần sử dụng phương thức hoặc cách đặc biệt.
 */

let username;
console.log(username);
username = "hoangnm";
console.log(username);

/**
 * 1. Khai báo với let không nhất thiết phải gán giá trị ngay khi khai báo.
 * 2. Khi không gán giá trị thì nhận "undefined"
 * 3. Thường dùng let cho các thông tin có thể cập nhật.
 */

/**
 * Cả const và let không thể khởi tạo lại cùng 1 tên biến trong cùng scope.
 * 1. global-scope
 * 2. block-scope
 * 3. function-scope
 */

{
	{
		{
			{
				{
					let a = 10;
					const Pi = 3.15;
					console.log(Pi);
				}
				// console.log(a);
			}
		}
	}
}
console.log(Pi);
