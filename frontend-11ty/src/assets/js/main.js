/**
 * animate on scroll (AOS)
 */
document.addEventListener("DOMContentLoaded", function () {
	const observerOptions = {
		root: null,
		rootMargin: "0px",
		threshold: 0.1,
	};

	const observerCallback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("fade-in");
				observer.unobserve(entry.target); // Optionally unobserve after animation
			}
		});
	};

	const observer = new IntersectionObserver(
		observerCallback,
		observerOptions
	);

	document.querySelectorAll(".animate-in").forEach((element) => {
		observer.observe(element);
	});
});

/* dark mode checker / toggle */
function applyThemeBasedOnOS() {
	const htmlElement = document.documentElement;
	const prefersDarkScheme = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;

	/* add the dark class if the pref is applied */
	if (prefersDarkScheme) {
		htmlElement.classList.add("dark");
	} else {
		htmlElement.classList.remove("dark");
	}
}

/* initialize */
applyThemeBasedOnOS();

/* add event listener for dark mode changes */
window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", (e) => {
		if (e.matches) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	});
