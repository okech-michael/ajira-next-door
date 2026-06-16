import { n as useRegister, t as RegisterProvider } from "./RegisterContext-Dqd3Dw4b.js";
import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CheckCircle2, Facebook, Instagram, Linkedin, Mail, MapPin, Menu, Phone, Twitter, X } from "lucide-react";
//#region src/styles.css?url
var styles_default = "/assets/styles-ClaX_daC.css";
//#endregion
//#region src/components/site/Navbar.tsx
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/events",
		label: "Events"
	}
];
function Navbar() {
	const { setOpen } = useRegister();
	const [scrolled, setScrolled] = useState(false);
	const [mobile, setMobile] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: `fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "glass-light shadow-soft" : "bg-transparent"}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container-x flex h-16 items-center justify-between",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-2 group",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand text-white font-bold shadow-elevated",
						children: "A"
					}), /* @__PURE__ */ jsxs("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-display text-sm font-bold tracking-tight",
							children: "Ajira Digital Club"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-[10px] uppercase tracking-widest text-muted-foreground",
							children: "Kisii University"
						})]
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden md:flex items-center gap-8",
					children: links.map((l) => /* @__PURE__ */ jsx(Link, {
						to: l.to,
						activeOptions: { exact: l.to === "/" },
						className: "relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors data-[status=active]:text-foreground",
						activeProps: { className: "text-foreground" },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden md:flex items-center gap-3",
					children: /* @__PURE__ */ jsx("button", {
						onClick: () => setOpen(true),
						className: "inline-flex items-center rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-white shadow-elevated lift lift-hover",
						children: "Register"
					})
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => setMobile((v) => !v),
					className: "md:hidden p-2",
					"aria-label": "Menu",
					children: mobile ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 })
				})
			]
		}), mobile && /* @__PURE__ */ jsx("div", {
			className: "md:hidden glass-light border-t animate-fade-in",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x py-4 flex flex-col gap-3",
				children: [links.map((l) => /* @__PURE__ */ jsx(Link, {
					to: l.to,
					onClick: () => setMobile(false),
					className: "py-2 text-sm font-medium",
					children: l.label
				}, l.to)), /* @__PURE__ */ jsx("button", {
					onClick: () => {
						setMobile(false);
						setOpen(true);
					},
					className: "mt-2 inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white",
					children: "Register"
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/site/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "relative mt-24 overflow-hidden bg-brand-black text-white/80",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-30 bg-gradient-dark" }),
			/* @__PURE__ */ jsx("div", { className: "absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-red/20 blur-3xl" }),
			/* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-brand-green/20 blur-3xl" }),
			/* @__PURE__ */ jsxs("div", {
				className: "container-x relative py-16 grid gap-12 md:grid-cols-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-2",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "grid h-10 w-10 place-items-center rounded-lg bg-gradient-brand font-bold",
									children: "A"
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "font-display font-bold text-white",
									children: "Ajira Digital Club"
								}), /* @__PURE__ */ jsx("div", {
									className: "text-xs uppercase tracking-widest text-white/60",
									children: "Kisii University"
								})] })]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-5 max-w-md text-sm leading-relaxed text-white/70",
								children: "A student-led digital innovation community equipping Kisii University students with future-ready skills, online work opportunities, and a culture of entrepreneurship."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-6 flex gap-3",
								children: [
									Facebook,
									Twitter,
									Instagram,
									Linkedin
								].map((Icon, i) => /* @__PURE__ */ jsx("a", {
									href: "#",
									className: "grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-white/40 hover:bg-white/5 transition",
									"aria-label": "social",
									children: /* @__PURE__ */ jsx(Icon, { size: 16 })
								}, i))
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "font-display font-semibold text-white mb-4",
						children: "Quick Links"
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-2 text-sm",
						children: [
							{
								to: "/",
								l: "Home"
							},
							{
								to: "/about",
								l: "About Us"
							},
							{
								to: "/gallery",
								l: "Gallery"
							},
							{
								to: "/events",
								l: "Events"
							}
						].map((x) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: x.to,
							className: "hover:text-white transition",
							children: x.l
						}) }, x.to))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "font-display font-semibold text-white mb-4",
						children: "Contact"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-3 text-sm",
						children: [
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx(MapPin, {
									size: 16,
									className: "mt-0.5 text-brand-red"
								}), " Kisii University, Main Campus"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx(Mail, {
									size: 16,
									className: "mt-0.5 text-brand-red"
								}), " ajira@kisiiuniversity.ac.ke"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx(Phone, {
									size: 16,
									className: "mt-0.5 text-brand-red"
								}), " 0741145911"]
							})
						]
					})] })
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative border-t border-white/10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Ajira Digital Club — Kisii University. All rights reserved."
					] }), /* @__PURE__ */ jsx("div", { children: "Built by students. Powered by ambition." })]
				})
			})
		]
	});
}
//#endregion
//#region src/components/site/RegisterModal.tsx
var interests = [
	"Web Development",
	"AI & Emerging Tech",
	"Cybersecurity",
	"Freelancing & Online Work",
	"Entrepreneurship & Innovation",
	"Graphic & Digital Design"
];
function RegisterModal() {
	const { open, setOpen } = useRegister();
	const [submitted, setSubmitted] = useState(false);
	useEffect(() => {
		if (!open) setSubmitted(false);
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	if (!open) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 z-50 grid place-items-center p-4 animate-fade-in",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ jsx("div", {
			className: "relative w-full max-w-xl animate-scale-in",
			children: /* @__PURE__ */ jsxs("div", {
				className: "glass-light rounded-2xl border shadow-elevated overflow-hidden",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative bg-gradient-brand px-6 py-5 text-white",
					children: [
						/* @__PURE__ */ jsx("button", {
							onClick: () => setOpen(false),
							className: "absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white/15 hover:bg-white/25 transition",
							"aria-label": "Close",
							children: /* @__PURE__ */ jsx(X, { size: 16 })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-2xl font-bold",
							children: "Join Ajira Digital Club"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-white/85 text-sm mt-1",
							children: "Take the first step toward your digital future."
						})
					]
				}), submitted ? /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-12 text-center",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-green/15 text-brand-green animate-scale-in",
							children: /* @__PURE__ */ jsx(CheckCircle2, { size: 36 })
						}),
						/* @__PURE__ */ jsx("h4", {
							className: "mt-5 font-display text-xl font-bold",
							children: "You're in! 🎉"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Thanks for registering. Our team will reach out shortly with onboarding details."
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setOpen(false),
							className: "mt-6 inline-flex rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background",
							children: "Close"
						})
					]
				}) : /* @__PURE__ */ jsxs("form", {
					onSubmit: (e) => {
						e.preventDefault();
						setSubmitted(true);
					},
					className: "px-6 py-6 grid gap-4",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ jsx(Field, {
								label: "Full Name",
								children: /* @__PURE__ */ jsx("input", {
									required: true,
									className: inputCls,
									placeholder: "Onyango Michael"
								})
							}), /* @__PURE__ */ jsx(Field, {
								label: "Email Address",
								children: /* @__PURE__ */ jsx("input", {
									required: true,
									type: "email",
									className: inputCls,
									placeholder: "you@kisiiuniversity.ac.ke"
								})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ jsx(Field, {
								label: "Phone Number",
								children: /* @__PURE__ */ jsx("input", {
									required: true,
									className: inputCls,
									placeholder: "0741145911"
								})
							}), /* @__PURE__ */ jsx(Field, {
								label: "Course / Department",
								children: /* @__PURE__ */ jsx("input", {
									required: true,
									className: inputCls,
									placeholder: "BSc Computer Science"
								})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ jsx(Field, {
								label: "Year of Study",
								children: /* @__PURE__ */ jsxs("select", {
									required: true,
									className: inputCls,
									defaultValue: "",
									children: [/* @__PURE__ */ jsx("option", {
										value: "",
										disabled: true,
										children: "Select year"
									}), [
										"1st Year",
										"2nd Year",
										"3rd Year",
										"4th Year",
										"5th Year",
										"Postgraduate"
									].map((y) => /* @__PURE__ */ jsx("option", { children: y }, y))]
								})
							}), /* @__PURE__ */ jsx(Field, {
								label: "Interest Area",
								children: /* @__PURE__ */ jsxs("select", {
									required: true,
									className: inputCls,
									defaultValue: "",
									children: [/* @__PURE__ */ jsx("option", {
										value: "",
										disabled: true,
										children: "Select interest"
									}), interests.map((i) => /* @__PURE__ */ jsx("option", { children: i }, i))]
								})
							})]
						}),
						/* @__PURE__ */ jsx(Field, {
							label: "Short Message",
							children: /* @__PURE__ */ jsx("textarea", {
								rows: 3,
								className: inputCls,
								placeholder: "Why do you want to join?"
							})
						}),
						/* @__PURE__ */ jsx("button", {
							type: "submit",
							className: "mt-2 inline-flex items-center justify-center rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elevated lift lift-hover",
							children: "Submit Registration"
						})
					]
				})]
			})
		})]
	});
}
var inputCls = "w-full rounded-lg border border-input bg-white/70 px-3 py-2.5 text-sm outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition";
function Field({ label, children }) {
	return /* @__PURE__ */ jsxs("label", {
		className: "block",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mb-1.5 text-xs font-medium text-foreground/80",
			children: label
		}), children]
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-gradient-brand",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-elevated",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-white",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "rounded-full border px-5 py-2 text-sm font-medium",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Ajira Digital Club — Kisii University" },
			{
				name: "description",
				content: "Empowering Kisii University students with digital skills, freelancing opportunities, AI, cybersecurity, and innovation."
			},
			{
				name: "author",
				content: "Ajira Digital Club, Kisii University"
			},
			{
				property: "og:title",
				content: "Ajira Digital Club — Kisii University"
			},
			{
				property: "og:description",
				content: "Empowering Kisii University students with digital skills, freelancing opportunities, AI, cybersecurity, and innovation."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Ajira Digital Club — Kisii University"
			},
			{
				name: "twitter:description",
				content: "Empowering Kisii University students with digital skills, freelancing opportunities, AI, cybersecurity, and innovation."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cbc87f41-5264-4bf9-9aee-7120f907b5a8/id-preview-ba6af7ab--97cd9c59-a1d0-42f9-9081-3e673cf536ac.lovable.app-1781365815413.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cbc87f41-5264-4bf9-9aee-7120f907b5a8/id-preview-ba6af7ab--97cd9c59-a1d0-42f9-9081-3e673cf536ac.lovable.app-1781365815413.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs(RegisterProvider, { children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("main", {
				className: "min-h-screen",
				children: /* @__PURE__ */ jsx(Outlet, {})
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(RegisterModal, {})
		] })
	});
}
//#endregion
//#region src/routes/gallery.tsx
var $$splitComponentImporter$3 = () => import("./gallery-Da0mPpWp.js");
var Route$3 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery — Ajira Digital Club, Kisii University" },
		{
			name: "description",
			content: "Photos from Ajira Digital Club workshops, hackathons, training sessions, and events at Kisii University."
		},
		{
			property: "og:title",
			content: "Gallery — Ajira Digital Club"
		},
		{
			property: "og:description",
			content: "Moments from our community: workshops, hackathons, and events."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/events.tsx
var $$splitComponentImporter$2 = () => import("./events-rJMUJTpB.js");
var Route$2 = createFileRoute("/events")({
	head: () => ({ meta: [
		{ title: "Events — Ajira Digital Club, Kisii University" },
		{
			name: "description",
			content: "Upcoming workshops, hackathons, and trainings hosted by Ajira Digital Club at Kisii University."
		},
		{
			property: "og:title",
			content: "Events — Ajira Digital Club"
		},
		{
			property: "og:description",
			content: "Join our upcoming hackathons, bootcamps, and digital career events."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-ZEVlpsf1.js");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Ajira Digital Club, Kisii University" },
		{
			name: "description",
			content: "Learn about the Ajira Digital Club at Kisii University — our mission, vision, and student leadership."
		},
		{
			property: "og:title",
			content: "About — Ajira Digital Club"
		},
		{
			property: "og:description",
			content: "Mission, vision, and the team leading the digital movement at Kisii University."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-2B3FHSls.js");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Ajira Digital Club — Kisii University" },
		{
			name: "description",
			content: "Empowering Kisii University students for the digital future through freelancing, AI, web dev, cybersecurity, and innovation."
		},
		{
			property: "og:title",
			content: "Ajira Digital Club — Kisii University"
		},
		{
			property: "og:description",
			content: "Join a thriving student community building digital careers and impact."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var GalleryRoute = Route$3.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$4
});
var EventsRoute = Route$2.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$4
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$4
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	AboutRoute,
	EventsRoute,
	GalleryRoute
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
