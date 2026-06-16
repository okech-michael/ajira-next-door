import { t as Reveal } from "./Reveal-DV41O7cT.js";
import { t as g2_default } from "./g2-DUD0kFBs.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { X } from "lucide-react";
//#endregion
//#region src/routes/gallery.tsx?tsr-split=component
var images = [
	{
		src: "/assets/g1-C2YcNSv9.jpg",
		caption: "Coding workshop"
	},
	{
		src: g2_default,
		caption: "Annual hackathon",
		tall: true
	},
	{
		src: "/assets/g3-BHvpCGMG.jpg",
		caption: "Cybersecurity lab"
	},
	{
		src: "/assets/g4-B4pbh28z.jpg",
		caption: "Freelance bootcamp",
		tall: true
	},
	{
		src: "/assets/g5-Dv0YmB0x.jpg",
		caption: "Cohort graduation"
	},
	{
		src: "/assets/g6-CKc06Nuc.jpg",
		caption: "Tech keynote"
	}
];
function Gallery() {
	const [lightbox, setLightbox] = useState(null);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative overflow-hidden bg-brand-black text-white pt-36 pb-20",
			children: [
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-dark" }),
				/* @__PURE__ */ jsx("div", { className: "absolute -top-20 right-0 h-80 w-80 rounded-full bg-brand-green/20 blur-3xl" }),
				/* @__PURE__ */ jsx("div", {
					className: "container-x relative",
					children: /* @__PURE__ */ jsxs(Reveal, { children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs font-semibold uppercase tracking-[0.25em] text-brand-red",
							children: "Gallery"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-4 font-display text-4xl sm:text-6xl font-bold max-w-3xl",
							children: "Moments that built the community."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 max-w-xl text-white/75",
							children: "A look inside our workshops, hackathons, and the wins we celebrate together."
						})
					] })
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-x py-20",
			children: /* @__PURE__ */ jsx("div", {
				className: "columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]",
				children: images.map((img, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 50,
					children: /* @__PURE__ */ jsxs("button", {
						onClick: () => setLightbox(i),
						className: "mb-5 block w-full overflow-hidden rounded-2xl border bg-card group relative",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: img.src,
								alt: img.caption,
								loading: "lazy",
								className: `w-full ${img.tall ? "aspect-[4/5]" : "aspect-square"} object-cover transition-transform duration-700 group-hover:scale-110`
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
							/* @__PURE__ */ jsx("div", {
								className: "absolute bottom-3 left-4 right-4 text-left text-white text-sm font-medium translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition",
								children: img.caption
							})
						]
					})
				}, i))
			})
		}),
		lightbox !== null && /* @__PURE__ */ jsxs("div", {
			className: "fixed inset-0 z-50 grid place-items-center p-4 bg-brand-black/90 backdrop-blur-sm animate-fade-in",
			onClick: () => setLightbox(null),
			children: [/* @__PURE__ */ jsx("button", {
				className: "absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20",
				"aria-label": "Close",
				children: /* @__PURE__ */ jsx(X, {})
			}), /* @__PURE__ */ jsx("img", {
				src: images[lightbox].src,
				alt: images[lightbox].caption,
				className: "max-h-[85vh] max-w-[92vw] rounded-2xl shadow-elevated animate-scale-in"
			})]
		})
	] });
}
//#endregion
export { Gallery as component };
