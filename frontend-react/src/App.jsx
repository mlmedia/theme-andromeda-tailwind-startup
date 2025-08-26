import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.1
		};

		const observerCallback = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("fade-in");
					observer.unobserve(entry.target);
				}
			});
		};

		const observer = new IntersectionObserver(
			observerCallback,
			observerOptions
		);

		document
			.querySelectorAll(".animate-in")
			.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, []);

	return (
		<>
			<Navbar />
			<Hero />
			<Services />
			<Portfolio />
			<Team />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
