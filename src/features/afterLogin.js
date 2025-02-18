function afterLogin() {
	const loginForm = document.querySelector("#loginForm");
	loginForm.addEventListener("submit", (e) => {
		e.preventDefault();
		console.log("login thanh cong");
	});
}

export default afterLogin;
