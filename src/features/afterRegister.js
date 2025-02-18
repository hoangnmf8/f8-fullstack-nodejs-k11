import { login, register } from "../api";

function afterRegister() {
	const registerForm = document.querySelector("#registerForm");
	console.log(registerForm);
	registerForm.addEventListener("submit", async (e) => {
		e.preventDefault();
		const user = Object.fromEntries(new FormData(registerForm));
		// validation

		// call API
		const data = await register(user);
		console.log(data);
	});
}

export default afterRegister;
