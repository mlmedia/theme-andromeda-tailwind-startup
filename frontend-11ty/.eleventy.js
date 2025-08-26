/* utility libraries for setting up the image shortcode */
const Image = require("@11ty/eleventy-img");
const path = require("path");

module.exports = function (eleventyConfig) {
	/* pass through copy directories without compiling */
	eleventyConfig.addPassthroughCopy("src/assets");

	/* pass through robots.txt and sitemap.xml */
	eleventyConfig.addPassthroughCopy("src/robots.txt");
	eleventyConfig.addPassthroughCopy("src/sitemap.xml");

	/* adding the image shortcode for responsive + performant images */
	eleventyConfig.addNunjucksAsyncShortcode("image", async (src, alt) => {
		/* get the directory and original filename of the source image */
		let srcDir = path.dirname(src);

		/* get the filename without extension */
		let fileName = path.basename(src, path.extname(src));

		let metadata = await Image(src, {
			widths: [320, 640, 1280],
			formats: ["webp", "jpeg"],
			urlPath: `/assets/images/${path.relative(
				"src/assets/images",
				srcDir
			)}/`,
			/* Where the images are outputted */
			outputDir: `./dist/assets/images/${path.relative(
				"src/assets/images",
				srcDir
			)}/`,
			filenameFormat: function (id, src, width, format, options) {
				return `${fileName}-${width}.${format}`;
			}
		});

		return `<picture class="w-full h-full">
			${Object.values(metadata)
				.map((format) =>
					format
						.map(
							(entry) =>
								`<source srcset="${entry.url}" media="(min-width: ${entry.width}px)" type="image/${entry.format}">`
						)
						.join("")
				)
				.join("")}
			<img src="${
				metadata.jpeg[0].url
			}" class="w-full h-full object-cover" alt="${alt}" />
		  </picture>`;
	});

	/* 404 error handling */
	const fs = require("fs");
	const NOT_FOUND_PATH = "dist/404/index.html";
	eleventyConfig.setBrowserSyncConfig({
		callbacks: {
			ready: function (err, bs) {
				bs.addMiddleware("*", (req, res) => {
					if (!fs.existsSync(NOT_FOUND_PATH)) {
						console.error(
							`404 page not found at ${NOT_FOUND_PATH}`
						);
						throw new Error(
							`Expected a \`${NOT_FOUND_PATH}\` file but could not find one. Did you create a 404.html template?`
						);
					}

					const content_404 = fs.readFileSync(NOT_FOUND_PATH);
					/* Add 404 HTTP status code in request header */
					res.writeHead(404, {
						"Content-Type": "text/html; charset=UTF-8"
					});
					/* Provide the 404 content without redirect */
					res.write(content_404);
					res.end();
				});
			}
		}
	});

	/* return config settings */
	return {
		passthroughFileCopy: true,
		markdownTemplateEngine: "njk",
		templateFormats: ["html", "njk", "md"],
		dir: {
			input: "src",
			output: "dist",
			data: "data",
			includes: "includes"
		}
	};
};
