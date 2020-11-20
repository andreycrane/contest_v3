import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Icon, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section box-shadow="0px 1px 0px #E5E9F2">
			<Override slot="SectionContent" flex-direction="row" justify-content="flex-start" align-items="center" />
			<Image width="28px" height="28px" src="https://uploads.quarkly.io/5fb7e9e1b83a2f001f2e1e2a/images/Color.svg?v=2020-11-20T16:31:56.648Z" />
			<Text margin="0px 0px 0px 0px" flex="1 " font="--font1" color="--textGray">
				Sales
			</Text>
			<Box background="--color-brandPurple" padding="11px 11px 11px 11px" border-radius="8px">
				<Icon category="md" icon={MdMenu} color="--light" />
			</Box>
		</Section>
		<Section padding="51px 24px 0 24px" box-sizing="border-box">
			<Override
				slot="SectionContent"
				justify-content="center"
				align-items="center"
				margin="0 0 0 0"
				flex="1 2 0px"
				box-sizing="border-box"
				min-width="auto"
			/>
			<Text font="--font2" text-align="center" display="inline-block" box-sizing="border-box">
				Track your product sales from anywhere, anytime
			</Text>
			<Components.BaseButton>
				Start using
			</Components.BaseButton>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});