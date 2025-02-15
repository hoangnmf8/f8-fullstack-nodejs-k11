// const arr1 = [1, 2, 3, [4, 5, [6, 7, [8]]]];

// console.log(arr1.flat(Infinity));
// console.log(arr1);

const arr2 = [1, 2, 3, , [4, , 5, undefined, [6, , 7, [8, , , 9]]]];

console.log(arr2.flat(Infinity));

const arr3 = [1, 2, 3, , , , "abc", , , , "xyz"];

console.log(arr3.flat(Infinity));
