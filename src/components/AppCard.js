import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Box, Text } from "@quarkly/widgets";
const defaultProps = {
	"border-radius": "8px",
	"box-sizing": "border-box"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"border-radius": "8px",
			"box-sizing": "border-box",
			"min-height": "380px",
			"box-sizing": "border-box"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"dispay": "block",
			"width": "100%",
			"height": "100%",
			"min-height": "380px",
			"box-sizigng": "border-box"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--font2",
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

const AppCard = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Box {...override("box")}>
			<Image {...override("image")} />
		</Box>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		{children}
	</Box>;
};

Object.assign(AppCard, { ...Box,
	defaultProps,
	overrides
});
export default AppCard;