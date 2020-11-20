import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"background": "--color-light",
	"border-radius": "8px",
	"padding": "40px 32px 40px 32px"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"width": "32px",
			"height": "32px",
			"margin": "0px 0px 54px 0px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--font1",
			"margin": "16px 0px 12px 0px",
			"children": "Some text"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--font3",
			"children": "Some text"
		}
	}
};

const AdvantageCart = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Image {...override("image")} />
		<Text {...override("text")} />
		<Text {...override("text1")} />
		{children}
	</Box>;
};

Object.assign(AdvantageCart, { ...Box,
	defaultProps,
	overrides
});
export default AdvantageCart;