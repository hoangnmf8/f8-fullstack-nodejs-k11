let myStr = "f8 - Hoc lap trinh f88, f8, \n f88";

// console.log(myStr.replace("f8", "F8"));
// console.log(myStr.replaceAll("f8", "F8"));

// let productName = "t-shirt for men freestyle";
// let productSlug = productName.replaceAll(" ", "-");
// console.log(productSlug);

/**
 * str.split(separator, limit)
 */

console.log(myStr.split());
console.log(myStr.split(""));
console.log(myStr.split(", "));
console.log(myStr.split(", ", 1));
console.log(myStr.split(", ", -3));
console.log(myStr.split("\n"));

let myStr2 = `f8 - Hoc lap trinh f88, f8, 




f88`;
console.log(myStr2.split("\n"));
