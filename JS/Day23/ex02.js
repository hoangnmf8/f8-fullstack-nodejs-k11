/**
 * find, findLast, findIndex, findLastIndex, incluces
 * filter
 */

const arr1 = [1, 2, 4, 5, 500, 7, 8, 11, 20, NaN];

const result1 = arr1.find((item) => item > 10);
console.log(result1);
console.log(arr1);

/**
 * find() trả về phần tử đầu tiên tìm thấy thoả mãn điều kiện.
 * findLast() trả về phần tử cuối cùng tìm thấy thoả mãn điều kiện.
 * - Nếu không có phần tử nào thoả mãn -> undefined.
 */

const result2 = arr1.findLast((item) => item > 10);

console.log(result2);

const result3 = arr1.findIndex((item) => item > 10);
console.log(result3);

const result4 = arr1.findLastIndex((item) => item > 10);
console.log(result4);

console.log(arr1.includes(NaN));
