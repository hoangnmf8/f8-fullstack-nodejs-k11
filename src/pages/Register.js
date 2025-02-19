import "../assets/styles/register.css";

function Register() {
	return /*html*/ `
    <form id="registerForm">
		<h1>Register</h1>
			<div class="mb-3">
				<label for="" class="form-label">Email</label>
				<input type="email" class="form-control" name="email" />
			</div>

			<div class="mb-3">
				<label for="" class="form-label">Password</label>
				<input type="password" class="form-control" name="password" />
			</div>
			<div class="mb-3">
				<button class="btn btn-primary w-100">Register</button>
			</div>
		</form>
  `;
}

export default Register;
