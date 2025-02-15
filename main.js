import Home from "./src/pages/Home";
import Register from "./src/pages/Register";
import "./style.css";
import Navigo from "navigo";

const app = document.querySelector("#app");
const router = new Navigo("/");

function render(target, content) {
	target.innerHTML = content();
}

router.on({
	"/": () => render(app, Home),
	"/register": () => render(app, Register),
});

router.resolve();
