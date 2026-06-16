import { t as Reveal } from "./Reveal-DV41O7cT.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Eye, Sparkles, Target } from "lucide-react";
//#region src/routes/about.tsx?tsr-split=component
var team = [
	{
		role: "Patron",
		name: "Dr. Teresa Abuya"
	},
	{
		role: "Chairperson",
		name: "Onyango Michael"
	},
	{
		role: "Vice Chairperson",
		name: "Emmanuel Ojiambo"
	},
	{
		role: "Secretary General",
		name: "Denis Kiplagat"
	},
	{
		role: "Partnerships & Outreach Lead",
		name: "Erik Mwangi"
	},
	{
		role: "Publicity Secretary",
		name: "Alex Chomba"
	},
	{
		role: "Events Organizer",
		name: "Kyalo Benson"
	},
	{
		role: "Membership & Engagement Lead",
		name: "Earnest Kethi"
	},
	{
		role: "Treasurer",
		name: "Ann Muchiri"
	},
	{
		role: "Trainer of Trainees",
		name: "Evelyne Njambi"
	}
];
function initials(name) {
	return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
}
function About() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative overflow-hidden bg-brand-black text-white pt-36 pb-24",
			children: [
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-dark" }),
				/* @__PURE__ */ jsx("div", { className: "absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-red/25 blur-3xl" }),
				/* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-brand-green/25 blur-3xl" }),
				/* @__PURE__ */ jsx("div", {
					className: "container-x relative",
					children: /* @__PURE__ */ jsxs(Reveal, { children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs font-semibold uppercase tracking-[0.25em] text-brand-red",
							children: "About us"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-4 font-display text-4xl sm:text-6xl font-bold max-w-3xl leading-[1.05]",
							children: "A student-led digital community at Kisii University."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 max-w-2xl text-white/75 leading-relaxed",
							children: "Ajira Digital Club is a community of curious, ambitious students equipping themselves with future-ready digital skills, connecting to online work opportunities, and fostering entrepreneurship and innovation across campus and beyond."
						})
					] })
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-x py-24 grid gap-6 md:grid-cols-2",
			children: [{
				I: Target,
				t: "Our Mission",
				d: "Empower students with practical digital skills and access to opportunities in the digital economy."
			}, {
				I: Eye,
				t: "Our Vision",
				d: "Build a thriving community of digitally empowered students who create impact through technology and innovation."
			}].map((b, i) => /* @__PURE__ */ jsx(Reveal, {
				delay: i * 100,
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative h-full overflow-hidden rounded-2xl border bg-card p-8 lift lift-hover",
					children: [
						/* @__PURE__ */ jsx("div", { className: "absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-brand opacity-10 blur-2xl" }),
						/* @__PURE__ */ jsx("div", {
							className: "grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-elevated",
							children: /* @__PURE__ */ jsx(b.I, { size: 22 })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-5 font-display text-2xl font-bold",
							children: b.t
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-muted-foreground leading-relaxed",
							children: b.d
						})
					]
				})
			}, b.t))
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-x pb-24 sm:pb-32",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-end justify-between gap-6 flex-wrap",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-red",
					children: "Leadership"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-3 font-display text-3xl sm:text-5xl font-bold",
					children: "The team behind the movement."
				})] }), /* @__PURE__ */ jsxs("div", {
					className: "text-sm text-muted-foreground inline-flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(Sparkles, {
						size: 14,
						className: "text-brand-green"
					}), " Elected by members, accountable to the club."]
				})]
			}) }), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: team.map((m, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ jsxs("div", {
						className: "group relative overflow-hidden rounded-2xl border bg-card p-6 lift lift-hover",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-1 bg-gradient-brand opacity-70" }), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-white font-bold shadow-elevated",
								children: initials(m.name)
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "font-display text-lg font-bold leading-tight",
								children: m.name
							}), /* @__PURE__ */ jsx("div", {
								className: "text-xs uppercase tracking-wider text-muted-foreground mt-0.5",
								children: m.role
							})] })]
						})]
					})
				}, m.name))
			})]
		})
	] });
}
//#endregion
export { About as component };
