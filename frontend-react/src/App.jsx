import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="font-sans text-gray-600 dark:text-gray-300">
			<Navbar />
			<Hero />
			<Services />
			<Portfolio />
			<Team />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
