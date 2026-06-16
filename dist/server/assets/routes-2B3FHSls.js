import { n as useRegister } from "./RegisterContext-Dqd3Dw4b.js";
import { t as Reveal } from "./Reveal-DV41O7cT.js";
import { t as parallax_default } from "./parallax-ZU6xQHh0.js";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Briefcase, CalendarDays, Code2, Cpu, Globe2, GraduationCap, Rocket, ShieldCheck, Users } from "lucide-react";
//#region src/assets/hero.jpg
var hero_default = "/assets/hero-BgnhB-MD.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Home() {
	const { setOpen } = useRegister();
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		const onScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const heroScale = 1 + Math.min(scrollY, 600) / 2400;
	const parallaxY = Math.min(scrollY, 800) * .25;
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative min-h-[100svh] overflow-hidden bg-brand-black text-white",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 will-change-transform",
					style: {
						transform: `scale(${heroScale})`,
						transition: "transform 60ms linear"
					},
					children: [
						/* @__PURE__ */ jsx("img", {
							src: hero_default,
							alt: "",
							className: "h-full w-full object-cover opacity-60"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/70 to-brand-black" }),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_30%,transparent,oklch(0.10_0_0/0.85))]" })
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "pointer-events-none absolute inset-0",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute -top-20 -left-20 h-80 w-80 rounded-full bg-brand-red/30 blur-3xl animate-float" }), /* @__PURE__ */ jsx("div", {
						className: "absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-brand-green/25 blur-3xl animate-float",
						style: { animationDelay: "1.5s" }
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "container-x relative z-10 flex min-h-[100svh] flex-col justify-center pt-28 pb-24",
					children: /* @__PURE__ */ jsxs("div", {
						className: "max-w-3xl animate-fade-up",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium tracking-wide",
								children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" }), "Student-led • Future-focused • Kisii University"]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]",
								children: [
									"Empowering Kisii University Students for the",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-gradient-brand",
										children: "Digital Future"
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 max-w-2xl text-base sm:text-lg text-white/75 leading-relaxed",
								children: "We equip students with practical skills in freelancing, AI, web development, cybersecurity, and innovation — and connect them to real online work opportunities."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ jsxs("button", {
									onClick: () => setOpen(true),
									className: "group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elevated lift lift-hover animate-pulse-glow",
									children: ["Register Now ", /* @__PURE__ */ jsx(ArrowRight, {
										size: 16,
										className: "transition-transform group-hover:translate-x-0.5"
									})]
								}), /* @__PURE__ */ jsx(Link, {
									to: "/about",
									className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition",
									children: "Learn More"
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs flex flex-col items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", { children: "Scroll" }), /* @__PURE__ */ jsx("span", { className: "h-8 w-px bg-white/40 animate-pulse" })]
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "relative -mt-16 z-20 container-x",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border bg-card shadow-elevated",
				children: [
					{
						v: "1,200+",
						l: "Students Trained",
						I: GraduationCap
					},
					{
						v: "480+",
						l: "Active Members",
						I: Users
					},
					{
						v: "60+",
						l: "Events Hosted",
						I: CalendarDays
					},
					{
						v: "350+",
						l: "Digital Opportunities",
						I: Globe2
					}
				].map((s, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ jsxs("div", {
						className: "bg-card p-6 sm:p-8 h-full",
						children: [
							/* @__PURE__ */ jsx(s.I, {
								className: "text-brand-red mb-3",
								size: 22
							}),
							/* @__PURE__ */ jsx("div", {
								className: "font-display text-3xl sm:text-4xl font-bold",
								children: s.v
							}),
							/* @__PURE__ */ jsx("div", {
								className: "text-xs sm:text-sm text-muted-foreground mt-1",
								children: s.l
							})
						]
					})
				}, i))
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-x py-24 sm:py-32",
			children: [/* @__PURE__ */ jsx("div", {
				className: "max-w-2xl",
				children: /* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-red",
					children: "What we do"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-3 font-display text-3xl sm:text-5xl font-bold",
					children: "Skills, opportunities, and a community that ships."
				})] })
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						I: Code2,
						t: "Web Development",
						d: "Modern frontends, full-stack apps, and product engineering with real-world projects."
					},
					{
						I: Cpu,
						t: "AI & Emerging Tech",
						d: "Hands-on with machine learning, LLMs, automation, and data-driven thinking."
					},
					{
						I: ShieldCheck,
						t: "Cybersecurity",
						d: "Defensive and offensive fundamentals, secure coding, and ethical hacking practice."
					},
					{
						I: Briefcase,
						t: "Freelancing & Online Work",
						d: "Upwork, Fiverr, and remote contracts — profile building, pitching, and delivery."
					},
					{
						I: Rocket,
						t: "Entrepreneurship & Innovation",
						d: "From idea to MVP — design thinking, lean startup, and pitch coaching."
					},
					{
						I: Globe2,
						t: "Digital Career Growth",
						d: "Mentorship, portfolios, and pathways into Kenya's growing digital economy."
					}
				].map((c, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ jsxs("div", {
						className: "group relative h-full overflow-hidden rounded-2xl border bg-card p-6 lift lift-hover",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" }), /* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-elevated",
									children: /* @__PURE__ */ jsx(c.I, { size: 22 })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-5 font-display text-xl font-bold",
									children: c.t
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: c.d
								})
							]
						})]
					})
				}, c.t))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative overflow-hidden",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0 will-change-transform",
				style: { transform: `translate3d(0, -${parallaxY}px, 0)` },
				children: [/* @__PURE__ */ jsx("img", {
					src: parallax_default,
					alt: "",
					className: "h-[140%] w-full object-cover"
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brand-black/75" })]
			}), /* @__PURE__ */ jsx("div", {
				className: "container-x relative py-24 sm:py-32 text-center text-white",
				children: /* @__PURE__ */ jsxs(Reveal, { children: [
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl sm:text-5xl font-bold max-w-3xl mx-auto leading-tight",
						children: "Your seat at Kenya's digital table is waiting."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 max-w-xl mx-auto text-white/75",
						children: "Join hundreds of Kisii University students already building real skills, real income, and real impact."
					}),
					/* @__PURE__ */ jsxs("button", {
						onClick: () => setOpen(true),
						className: "mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-semibold text-white shadow-elevated lift lift-hover animate-pulse-glow",
						children: ["Register & Join the Club ", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
					})
				] })
			})]
		})
	] });
}
//#endregion
export { Home as component };
