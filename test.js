const SEARCHBTN = document.querySelector(".nav__icon__search");
const SEARCHINPUT = document.querySelector(".nav__search");

SEARCHBTN.addEventListener("click", () => {
	SEARCHINPUT.classList.toggle("input--hide");
});