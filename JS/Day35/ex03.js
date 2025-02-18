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
			reject("Task C failed");
		}, 1000);
	});
}
// console.log({ Promise });

// console.time("promiseAll");
// Promise.all([taskA(), taskB(), taskC()])
// 	.then((values) => {
// 		console.log(values);
// 		console.timeEnd("promiseAll");
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

Promise.race([taskA(), taskB(), taskC()])
	.then((value) => {
		console.log(value);
	})
	.catch((error) => {
		console.log(error);
	});
