const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
const arr3 = arr1.concat("Hoang", ...arr2);
const arr4 = arr1.concat();
console.log(arr3);
console.log(arr4);

console.log(arr1);
console.log(arr1 === arr4);

/**
 * Có bao nhiêu cách copy mảng (không sử dụng thư viện)
 * - sử dụng spread
 * - sử dụng concat
 * - sử dụng structuredClone
 */

// - làm phẳng mảng đa chiều (không sử dụng flat).
// - sắp xếp mảng (không sử dụng sort).
