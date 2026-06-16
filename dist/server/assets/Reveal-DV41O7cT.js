import { useEffect, useRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/site/Reveal.tsx
function Reveal({ children, delay = 0, className = "" }) {
	const ref = useRef(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					setTimeout(() => el.classList.add("in"), delay);
					io.unobserve(el);
				}
			});
		}, { threshold: .12 });
		io.observe(el);
		return () => io.disconnect();
	}, [delay]);
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: `reveal ${className}`,
		children
	});
}
//#endregion
export { Reveal as t };
