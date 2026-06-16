import { n as useRegister } from "./RegisterContext-Dqd3Dw4b.js";
import { t as Reveal } from "./Reveal-DV41O7cT.js";
import { t as parallax_default } from "./parallax-ZU6xQHh0.js";
import { t as g2_default } from "./g2-DUD0kFBs.js";
import { useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
//#region src/routes/events.tsx?tsr-split=component
var upcoming = [
	{
		date: "Jul 12, 2026",
		title: "AI for Builders Bootcamp",
		tag: "Upcoming",
		desc: "A two-day intensive on building real apps with modern AI tools and LLM APIs.",
		loc: "Main Hall, Kisii University"
	},
	{
		date: "Aug 03, 2026",
		title: "Freelance Launchpad",
		tag: "Upcoming",
		desc: "Set up your Upwork & Fiverr profile, learn pitching, and land your first client.",
		loc: "ICT Lab 2"
	},
	{
		date: "Sep 21, 2026",
		title: "CyberSec CTF Challenge",
		tag: "Upcoming",
		desc: "Compete in our annual Capture-the-Flag tournament with prizes and recruiter scouts.",
		loc: "ICT Lab 1"
	}
];
var past = [
	{
		date: "Apr 18, 2026",
		title: "Hack the Hill 2026",
		desc: "Our flagship 36-hour hackathon — 28 teams, 6 winners, countless ideas.",
		loc: "Main Hall"
	},
	{
		date: "Feb 09, 2026",
		title: "Web Dev Weekend",
		desc: "From HTML to deployed app in two days — over 80 students participated.",
		loc: "ICT Lab 2"
	},
	{
		date: "Nov 24, 2025",
		title: "Career Day with Industry Mentors",
		desc: "Engineers and founders shared paths into Kenya's tech economy.",
		loc: "Senate Hall"
	}
];
function Events() {
	const { setOpen } = useRegister();
	const [y, setY] = useState(0);
	useEffect(() => {
		const fn = () => setY(window.scrollY);
		window.addEventListener("scroll", fn, { passive: true });
		return () => window.removeEventListener("scroll", fn);
	}, []);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative overflow-hidden bg-brand-black text-white pt-36 pb-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0 will-change-transform",
				style: { transform: `translate3d(0, ${y * .2}px, 0)` },
				children: [/* @__PURE__ */ jsx("img", {
					src: parallax_default,
					alt: "",
					className: "h-full w-full object-cover opacity-40"
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-brand-black/30 to-brand-black" })]
			}), /* @__PURE__ */ jsx("div", {
				className: "container-x relative",
				children: /* @__PURE__ */ jsxs(Reveal, { children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-xs font-semibold uppercase tracking-[0.25em] text-brand-red",
						children: "Events"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-4 font-display text-4xl sm:text-6xl font-bold max-w-3xl",
						children: "Where skills meet community."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 max-w-xl text-white/75",
						children: "From hackathons to keynote sessions — explore where we've been and what's coming up."
					})
				] })
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-x py-20",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("div", {
				className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-red",
				children: "Featured event"
			}) }), /* @__PURE__ */ jsx(Reveal, {
				delay: 100,
				children: /* @__PURE__ */ jsxs("div", {
					className: "mt-4 grid md:grid-cols-5 gap-0 overflow-hidden rounded-3xl border bg-card shadow-elevated",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-3 relative",
						children: [/* @__PURE__ */ jsx("img", {
							src: g2_default,
							alt: "",
							loading: "lazy",
							className: "h-full w-full object-cover aspect-[16/10]"
						}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent md:hidden" })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "md:col-span-2 p-8 sm:p-10 flex flex-col",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "inline-flex w-fit items-center gap-2 rounded-full bg-brand-red/10 text-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-wider",
								children: "Flagship"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-4 font-display text-2xl sm:text-3xl font-bold",
								children: "Hack the Hill 2026 — Edition II"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm text-muted-foreground leading-relaxed",
								children: "36 hours. Real problems. Mentors from Kenya's top tech companies. Build, ship, and pitch for a chance to win seed funding and internship offers."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-5 space-y-2 text-sm",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(CalendarDays, {
										size: 16,
										className: "text-brand-green"
									}), " October 17–18, 2026"]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(MapPin, {
										size: 16,
										className: "text-brand-green"
									}), " Kisii University Main Hall"]
								})]
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: () => setOpen(true),
								className: "mt-auto pt-8",
								children: /* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elevated lift lift-hover",
									children: ["Register Interest ", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
								})
							})
						]
					})]
				})
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-x pb-20",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("h2", {
				className: "font-display text-3xl sm:text-4xl font-bold",
				children: "Upcoming events"
			}) }), /* @__PURE__ */ jsx("div", {
				className: "mt-8 grid gap-5 md:grid-cols-3",
				children: upcoming.map((e, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ jsx(EventCard, {
						...e,
						onRegister: () => setOpen(true)
					})
				}, e.title))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-x pb-24",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("h2", {
				className: "font-display text-3xl sm:text-4xl font-bold",
				children: "Past events"
			}) }), /* @__PURE__ */ jsx("div", {
				className: "mt-8 grid gap-5 md:grid-cols-3",
				children: past.map((e, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ jsx(EventCard, {
						...e,
						tag: "Past",
						muted: true
					})
				}, e.title))
			})]
		})
	] });
}
function EventCard({ date, title, desc, loc, tag = "Upcoming", muted, onRegister }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "group h-full overflow-hidden rounded-2xl border bg-card p-6 lift lift-hover relative",
		children: [
			/* @__PURE__ */ jsx("div", { className: `absolute inset-x-0 top-0 h-1 ${muted ? "bg-muted-foreground/30" : "bg-gradient-brand"}` }),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: date
				}), /* @__PURE__ */ jsx("span", {
					className: `text-[10px] font-semibold uppercase tracking-wider rounded-full px-2 py-1 ${muted ? "bg-muted text-muted-foreground" : "bg-brand-green/10 text-brand-green"}`,
					children: tag
				})]
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "mt-3 font-display text-xl font-bold",
				children: title
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-2 text-sm text-muted-foreground leading-relaxed",
				children: desc
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-4 flex items-center gap-2 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ jsx(MapPin, {
						size: 14,
						className: "text-brand-red"
					}),
					" ",
					loc
				]
			}),
			!muted && /* @__PURE__ */ jsxs("button", {
				onClick: onRegister,
				className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:gap-2.5 transition-all",
				children: ["Register ", /* @__PURE__ */ jsx(ArrowRight, { size: 14 })]
			})
		]
	});
}
//#endregion
export { Events as component };
