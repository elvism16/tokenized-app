import Head from "next/head";
import Header from "../components/header/header";
import Section from "../components/section/section";
import Hero from "../components/hero/hero";
import Teaser from "../components/teaser/teaser";
import Footer from "../components/footer/footer";

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
						btnLabelPrimary='Get started'
						imgSrc='/img/welcome02.png'
						imgAlt='design tokens - what are they?'
					/>
				</Section>
				<Section>
					<Teaser
						imgSrc='/img/welcome02.png'
						imgAlt='design tokens - what are they?'
						kicker='All in one place'
						headline='Build a design system you can use — fast'
						byline='Building and maintaining a design system can feel like an impossible challenge. Knapsack gives teams a jump start by providing the core infrastructure and platform needed to get to value quickly, with best practices baked into the platform.'
					/>
				</Section>
				<Section>
					<Teaser
						type='reverse'
						imgSrc='/img/welcome02.png'
						imgAlt='design tokens - what are they?'
						kicker='Make it easy'
						headline='Unite design and engineering in one design system'
						byline='Make it easy for your product team to work together. Knapsack is built for collaboration between engineers, designers, product managers, and UX writers, with the tools and features they need to do their best work built-in.'
					/>
				</Section>
				<Section>
					<Teaser
						imgSrc='/img/welcome02.png'
						imgAlt='design tokens - what are they?'
						kicker='Collaboration is the key'
						headline='Make team-wide adoption and collaboration easy'
						byline='Design systems work best when your whole team is on board. Knapsack speeds up adoption by unlocking the power of community contribution and streamlining system distribution.'
					/>
				</Section>
				<Section
					type='double'
					bground
					heading='Simple plans that scale with your team'
				></Section>
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
