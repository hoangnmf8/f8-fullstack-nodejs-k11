/**
 * Bước 1: Hiển thị hết các slides ra.
 * Bước 2: Chỉ định currentIndex = 0. Phần tử 0 display = block, các phần tử khác display = none.
 * Bước 3: Tạo nút bấm next và prev và thêm sự kiện click cho nó.
 * Bước 4: Tính toán để hiển thị ra slide hiện tại (3/5)
 * Bước 5: Tạo list dots và thêm sự kiện click cho nó.
 * Bước 6: Xây dựng tính năng auto slide.
 */

const slidesData = [
	{
		image: "https://picsum.photos/id/25/800/400",
		title: "Slide 1",
	},
	{
		image: "https://picsum.photos/id/27/800/400",
		title: "Slide 2",
	},
	{
		image: "https://picsum.photos/id/28/800/400",
		title: "Slide 3",
	},
	{
		image: "https://picsum.photos/id/29/800/400",
		title: "Slide 4",
	},
];

const slides = document.querySelector(".slides");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const dots = document.querySelector(".dots");

let currentIndex = 0;
let slideLength = slidesData.length;

for (let i = 0; i < slideLength; i++) {
	const slide = document.createElement("li");
	slide.classList.add("slide");
	slide.innerHTML = `
    <img src="${slidesData[i].image}" alt="${slidesData[i].title}">
    <h2 class="title">${slidesData[i].title}</h2>
  `;
	slides.appendChild(slide);
}

function showSlide(currentIndex) {
	const slideItems = document.querySelectorAll(".slide");
	slideItems.forEach((slide, index) => {
		if (index === currentIndex) {
			slide.style.display = "block";
		} else {
			slide.style.display = "none";
		}
	});
}

function handleNextSlide() {
	currentIndex++;
	if (currentIndex >= slideLength) {
		currentIndex = 0;
	}
	showSlide(currentIndex);
}

function handlePrevSlide() {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = slideLength - 1;
	}
	showSlide(currentIndex);
}

showSlide(currentIndex);
btnNext.addEventListener("click", handleNextSlide);
btnPrev.addEventListener("click", handlePrevSlide);

setInterval(() => {
	handleNextSlide();
}, 3000);

for (let i = 0; i < slideLength; i++) {
	const dot = document.createElement("span");
	dot.classList.add("dot");
	dot.dataset.index = i;
	dots.appendChild(dot);
}

// Add event click for dots
const dotItems = document.querySelectorAll(".dot");
dotItems.forEach((dot) => {
	dot.addEventListener("click", function () {
		currentIndex = Number(this.dataset.index);
		showSlide(currentIndex);
	});
});
