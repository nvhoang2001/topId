document.addEventListener("DOMContentLoaded", function () {
	// Get the header element
	const header = document.querySelector(".header");
	let scrollPosition = window.scrollY;

	// Function to handle scroll events
	function handleScroll() {
		scrollPosition = window.scrollY;

		// Add or remove additional classes based on scroll position
		if (scrollPosition > 50) {
			header.classList.add("scrolled");
		} else {
			header.classList.remove("scrolled");
		}
	}

	// Add scroll event listener
	window.addEventListener("scroll", handleScroll);

	// Initial check
	handleScroll();
});
