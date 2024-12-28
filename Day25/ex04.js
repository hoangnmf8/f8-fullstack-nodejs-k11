const person = {
	greet() {
		console.log("Hello!");
	},
};

// Tạo ra student kế thừa lại phương thức của person.
const student = Object.create(person);
student.study = function () {
	console.log("Studying...");
};

student.greet();
student.study();

// person.study(); // error
console.log(person.greet === student.greet); // ?

console.log(student);
student.greet = function () {
	console.log("123");
};
console.log(student);
student.greet();
person.greet();

const emptyObj = Object.create(null);
const myObj = Object.create({});
console.log(emptyObj); // {}
console.log(myObj); // {}
