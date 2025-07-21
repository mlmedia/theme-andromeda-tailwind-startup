import React from "react";

function Hero() {
	return (
		<header
			id="hero"
			className="apply-section apply-hero-section"
			role="banner">
			<div className="apply-wrapper">
				<div className="apply-content animate-in">
					<h1 className="title">Andromeda</h1>
					<h2 className="subtitle">TailwindCSS Theme</h2>
					<p className="text">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Nesciunt illo tenetur fuga ducimus numquam ea!
					</p>
					<div className="cta-buttons">
						<a className="apply-btn-standard" href="#services">
							Learn More
						</a>
						<a className="apply-btn-standard" href="#contact">
							Get Started
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Hero;
