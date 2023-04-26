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
						btnLabelSecondary='Get in touch'
						imgSrc='/img/hero_alt_01.png'
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
