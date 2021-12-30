function fixed(event) {
	let width = window.innerWidth;
	let scroll = window.scrollY;
	let header = document.querySelector(".header");
	if (scroll >= 120 & width > 768) {
		header.classList.add("fixed");
	}
	if (scroll === 0 & width > 768) {
		header.classList.remove("fixed");
	}

	// ============================================================

	let topImage = document.querySelector(".top__item");
	let percent = scroll / 20;
	let height = window.innerHeight;
	if (scroll < height) {
		topImage.style.transform = `scale(${100 + percent}%)`
	}
}
window.addEventListener("scroll", fixed);

// ==============================================================

let burger = document.querySelector(".header__burger");
function showMenu() {
	let body = document.querySelector("body");
	let navigationAll = document.querySelectorAll(".navigation");
	body.classList.toggle("active");
	burger.classList.toggle("active");
	navigationAll.forEach(navigation => {
		navigation.classList.toggle("active");
	});
}
burger.addEventListener("click", showMenu);

// ==============================================================

let body = document.querySelector("body");
function removeActive() {
	let width = window.outerWidth;
	let navigationAll = document.querySelectorAll(".navigation");
	if (width > 768) {
		body.classList.remove("active");
		burger.classList.remove("active");
		navigationAll.forEach(navigation => {
			navigation.classList.remove("active");
		});
	}
}
window.addEventListener("resize", removeActive);

// ==============================================================
// ==============================================================
// ==============================================================

let buttons = document.querySelectorAll(".quotes__button-item");
let sliders = document.querySelectorAll(".quotes__body");
let background = document.querySelector(".quotes__background");
let slider_1 = sliders[0];
let slider_2 = sliders[1];
let slider_3 = sliders[2];

// ==============================================================

slider_1.style.left = "0";
slider_2.style.left = "100%";
slider_3.style.left = "200%";

// ==============================================================

function sliderHeight() {
	let quotes = document.querySelector(".quotes");
	let button = document.querySelector(".quotes__button");
	let heights = [];
	sliders.forEach(sliderHeight => {
		heights.push(sliderHeight.offsetHeight);
	});
	let height = Math.max.apply(null, heights);
	quotes.style.minHeight = `${height}px`;
	button.classList.remove("none");
}
setInterval(sliderHeight, 1);

// ==============================================================

function backgroundFixed(event) {
	let slidetItem = document.querySelector(".show").dataset.number;
	let width = window.innerWidth;
	if (slidetItem === "1") {
		background.style.left = "0";
	} else if (slidetItem === "2") {
		background.style.left = width > 768 ? "29px" : "52px";
	} else if (slidetItem === "3") {
		background.style.left = width > 768 ? "58px" : "104px";
	}
}
window.addEventListener("resize", backgroundFixed);

// ==============================================================

function changes() {
	let width = window.innerWidth;
	if (slider_1.classList.contains("show")) {
		slider_1.classList.remove("show");
		slider_2.classList.add("show");
		slider_1.style.left = "-100%";
		slider_2.style.left = "";
		slider_3.style.left = "100%";
		background.style.left = width > 768 ? "29px" : "52px";
	} else if (slider_2.classList.contains("show")) {
		slider_2.classList.remove("show");
		slider_3.classList.add("show");
		slider_1.style.left = "-200%";
		slider_2.style.left = "-100%";
		slider_3.style.left = "";
		background.style.left = width > 768 ? "58px" : "104px";
	} else if (slider_3.classList.contains("show")) {
		slider_3.classList.remove("show");
		slider_1.classList.add("show");
		slider_1.style.left = "";
		slider_2.style.left = "100%";
		slider_3.style.left = "200%";
		background.style.left = "0";
	}
}
setInterval(changes, 60000);

// ==============================================================

let mouseDown;
let mouseUp;
let mouseDifference;
sliders.forEach(slider => {
	slider.addEventListener("mousedown", (event) => {
		mouseDown = event.x;
	});
	slider.addEventListener("mouseup", (event) => {
		let width = window.innerWidth;
		mouseUp = event.x;
		mouseDifference = mouseUp - mouseDown;
		if (mouseDifference > 0) {
			if (slider_1.classList.contains("show")) {
				slider_1.classList.remove("show");
				slider_3.classList.add("show");
				slider_1.style.left = "-200%";
				slider_2.style.left = "-100%";
				slider_3.style.left = "";
				background.style.left = width > 768 ? "58px" : "104px";
			} else if (slider_2.classList.contains("show")) {
				slider_2.classList.remove("show");
				slider_1.classList.add("show");
				slider_1.style.left = "";
				slider_2.style.left = "100%";
				slider_3.style.left = "200%";
				background.style.left = "0";
			} else if (slider_3.classList.contains("show")) {
				slider_3.classList.remove("show");
				slider_2.classList.add("show");
				slider_1.style.left = "-100%";
				slider_2.style.left = "";
				slider_3.style.left = "100%";
				background.style.left = width > 768 ? "29px" : "52px";
			}
		} else if (mouseDifference < 0) {
			if (slider_1.classList.contains("show")) {
				slider_1.classList.remove("show");
				slider_2.classList.add("show");
				slider_1.style.left = "-100%";
				slider_2.style.left = "";
				slider_3.style.left = "100%";
				background.style.left = width > 768 ? "29px" : "52px";
			} else if (slider_2.classList.contains("show")) {
				slider_2.classList.remove("show");
				slider_3.classList.add("show");
				slider_1.style.left = "-200%";
				slider_2.style.left = "-100%";
				slider_3.style.left = "";
				background.style.left = width > 768 ? "58px" : "104px";
			} else if (slider_3.classList.contains("show")) {
				slider_3.classList.remove("show");
				slider_1.classList.add("show");
				slider_1.style.left = "";
				slider_2.style.left = "100%";
				slider_3.style.left = "200%";
				background.style.left = "0";
			}
		}
		slider.style.cursor = "";
	});
});

// ==============================================================

let touchStart;
let touchEnd;
let touchDifference;
sliders.forEach(slider => {
	slider.addEventListener("touchstart", (event) => {
		touchStart = event.changedTouches[0].clientX;
	})
	slider.addEventListener("touchend", (event) => {
		let width = window.innerWidth;
		touchEnd = event.changedTouches[0].clientX;
		touchDifference = touchEnd - touchStart;
		if (touchDifference > 0) {
			if (slider_1.classList.contains("show")) {
				slider_1.classList.remove("show");
				slider_3.classList.add("show");
				slider_1.style.left = "-200%";
				slider_2.style.left = "-100%";
				slider_3.style.left = "";
				background.style.left = width > 768 ? "58px" : "104px";
			} else if (slider_2.classList.contains("show")) {
				slider_2.classList.remove("show");
				slider_1.classList.add("show");
				slider_1.style.left = "";
				slider_2.style.left = "100%";
				slider_3.style.left = "200%";
				background.style.left = "0";
			} else if (slider_3.classList.contains("show")) {
				slider_3.classList.remove("show");
				slider_2.classList.add("show");
				slider_1.style.left = "-100%";
				slider_2.style.left = "";
				slider_3.style.left = "100%";
				background.style.left = width > 768 ? "29px" : "52px";
			}
		} else if (touchDifference < 0) {
			if (slider_1.classList.contains("show")) {
				slider_1.classList.remove("show");
				slider_2.classList.add("show");
				slider_1.style.left = "-100%";
				slider_2.style.left = "";
				slider_3.style.left = "100%";
				background.style.left = width > 768 ? "29px" : "52px";
			} else if (slider_2.classList.contains("show")) {
				slider_2.classList.remove("show");
				slider_3.classList.add("show");
				slider_1.style.left = "-200%";
				slider_2.style.left = "-100%";
				slider_3.style.left = "";
				background.style.left = width > 768 ? "58px" : "104px";
			} else if (slider_3.classList.contains("show")) {
				slider_3.classList.remove("show");
				slider_1.classList.add("show");
				slider_1.style.left = "";
				slider_2.style.left = "100%";
				slider_3.style.left = "200%";
				background.style.left = "0";
			}
		}
	})
});

// ==============================================================

function keyboardChange(event) {
	let width = window.innerWidth;
	if (event.code === "ArrowLeft") {
		if (slider_1.classList.contains("show")) {
			slider_1.classList.remove("show");
			slider_3.classList.add("show");
			slider_1.style.left = "-200%";
			slider_2.style.left = "-100%";
			slider_3.style.left = "";
			background.style.left = width > 768 ? "58px" : "104px";
		} else if (slider_2.classList.contains("show")) {
			slider_2.classList.remove("show");
			slider_1.classList.add("show");
			slider_1.style.left = "";
			slider_2.style.left = "100%";
			slider_3.style.left = "200%";
			background.style.left = "0";
		} else if (slider_3.classList.contains("show")) {
			slider_3.classList.remove("show");
			slider_2.classList.add("show");
			slider_1.style.left = "-100%";
			slider_2.style.left = "";
			slider_3.style.left = "100%";
			background.style.left = width > 768 ? "29px" : "52px";
		}
	} else if (event.code === "ArrowRight") {
		if (slider_1.classList.contains("show")) {
			slider_1.classList.remove("show");
			slider_2.classList.add("show");
			slider_1.style.left = "-100%";
			slider_2.style.left = "";
			slider_3.style.left = "100%";
			background.style.left = width > 768 ? "29px" : "52px";
		} else if (slider_2.classList.contains("show")) {
			slider_2.classList.remove("show");
			slider_3.classList.add("show");
			slider_1.style.left = "-200%";
			slider_2.style.left = "-100%";
			slider_3.style.left = "";
			background.style.left = width > 768 ? "58px" : "104px";
		} else if (slider_3.classList.contains("show")) {
			slider_3.classList.remove("show");
			slider_1.classList.add("show");
			slider_1.style.left = "";
			slider_2.style.left = "100%";
			slider_3.style.left = "200%";
			background.style.left = "0";
		}
	} else {
		return false;
	}
}
document.addEventListener("keyup", keyboardChange);

// ==============================================================

buttons.forEach(button => {
	function change(event) {
		let number = event.srcElement.dataset.number;
		let width = window.innerWidth;
		sliders.forEach(slider => {
			if (number === "1") {
				slider_2.style.left = "100%";
				slider_3.style.left = "200%";
				background.style.left = "0";
			}
			if (number === "2") {
				slider_1.style.left = "-100%";
				slider_3.style.left = "100%";
				background.style.left = width > 768 ? "29px" : "52px";
			}
			if (number === "3") {
				slider_1.style.left = "-200%";
				slider_2.style.left = "-100%";
				background.style.left = width > 768 ? "58px" : "104px";
			}
			if (slider.dataset.number === number) {
				slider.classList.add("show");
				slider.style.left = ""
			} else {
				slider.classList.remove("show");
			}
		})
	}
	button.addEventListener("click", change);
});

// ==============================================================
// ==============================================================
// ==============================================================

let inputEmail = document.querySelector(".form__email-item");
let buttonItem = document.querySelector(".form__button-item");
inputEmail.placeholder = "enter your email...";
if (inputEmail.value === "") {
	buttonItem.setAttribute("disabled", "true");
} else {
	buttonItem.removeAttribute("disabled");
}
inputEmail.addEventListener("focus", (event) => {
	inputEmail.placeholder = "";
});
inputEmail.addEventListener("blur", (event) => {
	if (inputEmail.value === "") {
		inputEmail.placeholder = "enter your email...";
	}
});
inputEmail.addEventListener("input", (event) => {
	if (inputEmail.value === "") {
		buttonItem.setAttribute("disabled", "true");
	} else {
		buttonItem.removeAttribute("disabled");
	}
});
