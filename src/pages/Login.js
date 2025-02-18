import "../assets/styles/register.css";

function Login() {
	return /*html*/ `
    <form id="loginForm">
		<h1>Login</h1>
			<div class="mb-3">
				<label for="" class="form-label">Email</label>
				<input type="email" class="form-control" name="email" />
			</div>

			<div class="mb-3">
				<label for="" class="form-label">Password</label>
				<input type="password" class="form-control" name="password" />
			</div>
			<div class="mb-3">
				<button class="btn btn-primary w-100">Login</button>
			</div>
		</form>
  `;
}

export default Login;
