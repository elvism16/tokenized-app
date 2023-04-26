import Head from "next/head";
import Header from "../components/header/header";
import Section from "../components/section/section";
import Hero from "../components/hero/hero";
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
