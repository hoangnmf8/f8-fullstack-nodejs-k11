const arr1 = [2, 3, 1, 7, 6, 4, 5, 10, 11, 100];
arr1.sort((a, b) => a - b);
console.log(arr1);

const arr2 = ["hoang", "trung", "Trung", NaN, "Do", , undefined, "Minh", "ZZZZ", "zzzzzzzzzzzz"];

console.log(arr2.sort((a, b) => a - b));
console.log(arr2.sort());
