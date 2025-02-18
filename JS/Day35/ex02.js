function taskA() {
	return new Promise((resolve, reject) => {
		console.log("Task A doing");
		setTimeout(function () {
			resolve("Task A done");
		}, 3000);
	});
}

function taskB() {
	return new Promise((resolve, reject) => {
		console.log("Task B doing");
		setTimeout(function () {
			resolve("Task B done");
		}, 2000);
	});
}

function taskC() {
	return new Promise((resolve, reject) => {
		console.log("Task C doing");
		setTimeout(function () {
			resolve("Task C done");
		}, 1000);
	});
}

console.time("promise");
taskA()
	.then((result) => {
		console.log(result);
		// Thực hiện tiếp nhiệm vụ B
		// return "alo";
		return taskB();
	})
	.then((result) => {
		console.log(result);
		// Thực hiện tiếp nhiệm vụ C
		return taskC();
	})
	.then((result) => {
		console.log(result);
	})
	.catch()
	.finally(() => {
		console.log("finally");
		console.timeEnd("promise");
	});

// Promises chain

// fetch("https://dummyjson.com/products")
// 	.then((response) => {
// 		// lam rat nhieu thu o day
// 		return response.json();
// 	})
// 	.then((data) => console.log(data))
// 	.catch((error) => console.log(error));
