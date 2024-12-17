const students = [];
console.log(Array.isArray(students));
console.log(Number([]));
console.log(String([]));
console.log(Boolean([]));

const membersK11 = ["Duc Anh", "Minh", "Do", "Thang", "Viet Anh", "Dang", "Phong"];

console.log(membersK11[0]);
membersK11[0] = "Hoang";
console.log(membersK11);
console.log((membersK11[20] = "Trung"));
console.log(membersK11);
console.log(membersK11.length);
membersK11[21] = "Huy";
console.log(membersK11);
