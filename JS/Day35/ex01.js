function taskA(callback) {
	setTimeout(function () {
		console.log("Task A done");
		callback(); // taskB
	}, 3000);
}

function taskB(callback) {
	setTimeout(function () {
		console.log("Task B done");
		callback();
	}, 2000);
}

function taskC(callback) {
	setTimeout(function () {
		console.log("Task C done");
		callback();
	}, 1000);
}

// callback hell
taskA(function () {
	taskB(function () {
		taskC(function () {
			console.log("All tasks done");
		});
	});
});

// Callback xử lý bất đồng bộ ở cấp độ thấp (< 3 tasks)
