const arr1 = [1, 2, 3, 4, [100, 200]];

const [first, second, ...rest] = arr1;

console.log(first);
console.log(second);
console.log(rest);

const arr2 = [10, 11, 12];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const arr1Copy = [...arr1];
console.log(arr1Copy);
console.log(arr1Copy === arr1);
console.log(arr1Copy[4][0]);
arr1Copy[4][0] = 1000;

console.log(arr1Copy);
console.log(arr1);

/**
 * Copy mảng, object bằng spread chỉ là shallow copy.
 *
 */
/**
 * arr1: [0xf1, 0xf2, 0xf3, 0xf4, 0xf5]
 *
 * arr1[4] -> 0xf5
 */

const arr1DeepCopy = structuredClone(arr1);

arr1DeepCopy[4][0] = "Hoang";
console.log(arr1DeepCopy);
console.log(arr1);
