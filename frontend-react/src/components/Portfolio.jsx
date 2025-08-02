import React, { useState } from "react";
import work from "../data/work.json";

function Portfolio() {
	const [modalOpen, setModalOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const openModal = (index) => {
		setCurrentIndex(index);
		setModalOpen(true);
		document.body.classList.add("no-scroll");
	};

	const closeModal = () => {
		setModalOpen(false);
		document.body.classList.remove("no-scroll");
	};

	const prevImage = () => {
		setCurrentIndex((currentIndex - 1 + work.length) % work.length);
	};

	const nextImage = () => {
		setCurrentIndex((currentIndex + 1) % work.length);
	};

	return (
		<>
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
										<button
											type="button"
											className="open-modal"
											onClick={() => openModal(i)}>
											<img
												src={item.image}
												alt={item.title}
											/>
											<div className="caption">
												<h3 className="title">
													{item.title}
												</h3>
											</div>
										</button>
									</div>
								</figure>
							))}
						</div>
					</div>
				</div>
			</section>

			<div
				id="lightbox-modal"
				className={
					modalOpen
						? "apply-lightbox-modal flex"
						: "apply-lightbox-modal hidden"
				}>
				<div className="wrapper">
					<button
						id="close-modal"
						className="close-modal"
						onClick={closeModal}>
						&times;
					</button>
					<div className="content">
						<button
							id="prev-image"
							className={
								work.length > 1 ? "nav-prev" : "nav-prev hidden"
							}
							onClick={prevImage}>
							&lsaquo;
						</button>
						<div className="image-container">
							<img
								id="modal-image"
								src={work[currentIndex].image}
								className="image"
								alt="Enlarged Image"
								width="100%"
								height="auto"
							/>
							<div id="image-caption" className="caption">
								{`Sample caption text for ${work[currentIndex].title}`}
							</div>
						</div>
						<button
							id="next-image"
							className={
								work.length > 1 ? "nav-next" : "nav-next hidden"
							}
							onClick={nextImage}>
							&rsaquo;
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Portfolio;
