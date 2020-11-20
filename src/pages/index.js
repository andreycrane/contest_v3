import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Icon, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section, StackItem, Stack } from "@quarkly/components";
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
		<Section box-shadow="0px 1px 0px #E5E9F2" padding="22px 25px 22px 25px" box-sizing="border-box">
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="flex-start"
				align-items="center"
				box-sizing="border-box"
				min-width="auto"
			/>
			<Image width="28px" height="28px" src="https://uploads.quarkly.io/5fb7e9e1b83a2f001f2e1e2a/images/Color.svg?v=2020-11-20T16:31:56.648Z" />
			<Text margin="0px 0px 0px 0px" flex="1 " font="--font1" color="--textGray">
				Sales
			</Text>
			<Box background="--color-brandPurple" padding="11px 11px 11px 11px" border-radius="8px">
				<Icon category="md" icon={MdMenu} color="--light" />
			</Box>
		</Section>
		<Section padding="51px 24px 0 24px" box-sizing="border-box" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fb7e9e1b83a2f001f2e1e2a/images/Ellipse.png?v=2020-11-20T18:28:46.294Z) center bottom/auto no-repeat scroll padding-box">
			<Override
				slot="SectionContent"
				justify-content="center"
				align-items="center"
				margin="0 0 0 0"
				flex="1 2 0px"
				box-sizing="border-box"
				min-width="auto"
			/>
			<Text
				font="--font2"
				text-align="center"
				display="inline-block"
				box-sizing="border-box"
				margin="0px 0px 32px 0px"
			>
				Track your product sales from anywhere, anytime
			</Text>
			<Components.BaseButton margin="0px 0px 56px 0px">
				Start using
			</Components.BaseButton>
			<Image src="https://uploads.quarkly.io/5fb7e9e1b83a2f001f2e1e2a/images/iPhone%20X.png?v=2020-11-20T17:09:58.458Z" width="100%" height="319px" />
		</Section>
		<Section background="--color-brandPurple">
			<Override slot="SectionContent" align-items="center" />
			<Text font="--font2" text-align="center" color="--light">
				Are already using
			</Text>
			<Text text-align="center" font="--font3" color="--light">
				We have been working with some 500 clients
			</Text>
			<Stack>
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}First Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}Second Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section>
			<Text font="--font2">
				Intuitive dashboard for monitoring
			</Text>
			<Text font="400 16px/32px --fontFamily-googleInter" color="--textGray1">
				Track sales and customers on any device, a very simple and intuitive interface where you will not have any difficulties, as well as advanced teamwork
			</Text>
		</Section>
		<Section background="--color-lightGrayMaybe">
			<Image width="100%" height="222px" src="https://uploads.quarkly.io/5fb7e9e1b83a2f001f2e1e2a/images/Macbook%20Pro.png?v=2020-11-20T18:52:55.164Z" />
		</Section>
		<Section background="--color-darkBlue1">
			<Text color="--light" font="--font2">
				The advantages of our product
			</Text>
			<Components.AdvantageCart margin="0px 0px 18px 0px">
				<Override slot="text">
					Fast response
				</Override>
				<Override slot="text1">
					Works quickly both in the browser and on the desktop application of your computer
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fb7e9e1b83a2f001f2e1e2a/images/01.svg?v=2020-11-20T19:06:36.623Z" />
			</Components.AdvantageCart>
			<Components.AdvantageCart margin="0px 0px 18px 0px">
				<Override slot="text">
					Intuitive design
				</Override>
				<Override slot="text1">
					A simple and competent interface for the productive work of your team will not make{" "}
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fb7e9e1b83a2f001f2e1e2a/images/03.svg?v=2020-11-20T19:08:52.497Z" />
			</Components.AdvantageCart>
			<Components.AdvantageCart>
				<Override slot="text">
					Responsive platform
				</Override>
				<Override slot="text1">
					Tablet, phone or computer, work on any device and be always aware of the events{" "}
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fb7e9e1b83a2f001f2e1e2a/images/04.svg?v=2020-11-20T19:11:25.324Z" />
			</Components.AdvantageCart>
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