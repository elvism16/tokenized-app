import Head from "next/head";
import Header from "../components/header/header";
import Section from "../components/section/section";
import Hero from "../components/hero/hero";
import Teaser from "../components/teaser/teaser";
import Box from "../components/box/box";
import Footer from "../components/footer/footer";
// import { SVGSource, SVG } from "../components/svg/svg";

export default function Home() {
	return (
		<>
			<Head>
				<title>Get our fantastic Product</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main>
				{/* hero section */}
				<Section type='hero'>
					<Hero
						headline='Bring your design system to life'
						byline='Whether you’re sending big files for fun or delivering work for clients—keep creative projects moving forward with WeTransfer.'
						btnLabelSecondary='Get started'
						imgSrc='/img/graphic01.svg'
						imgAlt='design tokens - what are they?'
						// svgSource='graphic01'
					/>
				</Section>
				<Section>
					<Teaser
						imgSrc='/img/graphic03.svg'
						imgAlt='design tokens - what are they?'
						kicker='All in one place'
						headline='Build a design system you can use — fast'
						byline='Building and maintaining a design system can feel like an impossible challenge. Knapsack gives teams a jump start by providing the core infrastructure and platform needed to get to value quickly, with best practices baked into the platform.'
					/>
				</Section>
				<Section>
					<Teaser
						type='reverse'
						imgSrc='/img/graphic04.svg'
						imgAlt='design tokens - what are they?'
						kicker='Make it easy'
						headline='Unite design and engineering in one design system'
						byline='Make it easy for your product team to work together. Knapsack is built for collaboration between engineers, designers, product managers, and UX writers, with the tools and features they need to do their best work built-in.'
					/>
				</Section>
				<Section>
					<Teaser
						imgSrc='/img/graphic05.svg'
						imgAlt='design tokens - what are they?'
						kicker='Collaboration is the key'
						headline='Make team-wide adoption and collaboration easy'
						byline='Design systems work best when your whole team is on board. Knapsack speeds up adoption by unlocking the power of community contribution and streamlining system distribution.'
					/>
				</Section>
				<Section
					type='triple'
					bground
					heading='Simple plans that scale with your team'
				>
					<Box
						title='Free'
						description='For anyone getting started with their design system'
						price='0$'
						btnLabel='Sign up for free'
					/>
					<Box
						title='Starter'
						description='More collaboration and customization for growing design system teams'
						price='89$'
						btnLabel='Request a demo'
					/>
					<Box
						type='dark'
						title='Enterprise'
						description='Design system management and dedicated support for larger organizations'
						price='from 299$'
						btnLabel='Contact our Sales Team'
					/>
				</Section>
			</main>

			<Footer />

			<style jsx>{`
				footer {
					width: 100%;
					height: 100px;
					border-top: 1px solid #eaeaea;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			`}</style>
		</>
	);
}
