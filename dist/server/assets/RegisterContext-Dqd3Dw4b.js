import { createContext, useContext, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/site/RegisterContext.tsx
var RegisterCtx = createContext({
	open: false,
	setOpen: () => {}
});
function RegisterProvider({ children }) {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsx(RegisterCtx.Provider, {
		value: {
			open,
			setOpen
		},
		children
	});
}
var useRegister = () => useContext(RegisterCtx);
//#endregion
export { useRegister as n, RegisterProvider as t };
