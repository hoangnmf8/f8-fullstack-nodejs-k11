import afterLogin from "./src/features/afterLogin";
import afterRegister from "./src/features/afterRegister";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import NotFound from "./src/pages/NotFound";
import Register from "./src/pages/Register";
import "./style.css";
import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a" });
const app = document.querySelector("#app");

function render(contentFn, beforeFn, afterFn) {
	if (beforeFn) beforeFn();
	app.innerHTML = contentFn();
	if (afterFn) afterFn();
}

router
	.on({
		"/": () => render(Home),
		"/register": () => render(Register, null, afterRegister),
		"/login": () => render(Login, null, afterLogin),
	})
	.notFound(() => render(NotFound));

router.resolve();
