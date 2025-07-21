import React from "react";
import work from "../data/work.json";

function Portfolio() {
	return (
		<section
			id="portfolio"
			className="apply-section apply-bg-secondary scroll-mt-16"
			aria-labelledby="work-section-title">
			<div className="apply-wrapper py-16">
				<header className="section-header animate-in">
					<h2 id="work-section-title" className="heading">
						Our Work
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.
					</p>
				</header>
				<div className="apply-content">
					<div className="apply-grid-2-3">
						{work.map((item, i) => (
							<figure
								key={i}
								className="apply-gallery-card animate-in">
								<div className="content">
									<img src={item.image} alt={item.title} />
									<div className="caption">
										<h3 className="title">{item.title}</h3>
									</div>
								</div>
							</figure>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
