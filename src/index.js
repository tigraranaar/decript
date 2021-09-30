import "./styles/main.scss";

document.addEventListener("DOMContentLoaded", () => {
	const menuOpenBtn = document.getElementById("header__burger");
	const menuCloseBtn = document.getElementById("overlay__close");
	const overlay = document.getElementById("overlay");

	menuOpenBtn.addEventListener("click", () => {
		overlay.classList.add("active-overlay");
	});

	menuCloseBtn.addEventListener("click", () => {
		overlay.classList.remove("active-overlay");
	});
});
