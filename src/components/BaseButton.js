import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"background": "--color-brandPurple",
	"font": "normal 700 16px/30px --fontFamily-googleInter",
	"color": "--light",
	"border-radius": "8px",
	"padding": "12px 36px 12px 36px",
	"children": "Button"
};
const overrides = {};

const BaseButton = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		{children}
	</Button>;
};

Object.assign(BaseButton, { ...Button,
	defaultProps,
	overrides
});
export default BaseButton;