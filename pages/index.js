import Head from "next/head";
import Header from "../components/header/header";
import Section from "../components/section/section";
import Hero from "../components/hero/hero";
import Card from "../components/card/card";
import Footer from "../components/footer/footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Get Tokenized</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main>
				{/* hero section */}
				<Section type='hero'>
					<Hero
						btnLabelPrimary="What's a token?"
						btnLabelSecondary='Get in touch'
					/>
				</Section>

				<Section type='page' heading='From the Blog'>
					<Card
						imgSrc='img/tsr01.png'
						category='Blog'
						catTarget='#'
						heading='Headline, Ladies'
						paragraph='Our culture is dominated by efforts to score points and win arguments. But do we really talk anymore?'
						linkTarget='http://bitgrip.com'
					/>
					<Card
						imgSrc='img/tsr02.png'
						category='Design'
						catTarget='#'
						heading='Nicholas Humphrey’s Beautiful Theory of Mind'
						paragraph='Our culture is dominated by efforts to score points and win arguments. But do we really talk anymore?'
						linkTarget='http://bitgrip.com'
					/>
					<Card
						imgSrc='img/tsr03.png'
						category='Culture'
						catTarget='#'
						heading='Winning Tactics For TOKEN DESIGN'
						paragraph='Our culture is dominated by efforts to score points and win arguments. But do we really talk anymore?'
						linkTarget='http://bitgrip.com'
					/>
					<Card
						imgSrc='img/tsr04.png'
						category='Tech & Dev'
						catTarget='#'
						heading='Little Known Ways To Rid Yourself Of the Grid'
						paragraph='Our culture is dominated by efforts to score points and win arguments. But do we really talk anymore?'
						linkTarget='http://bitgrip.com'
					/>
					<Card
						imgSrc='img/tsr05.png'
						category='Design'
						catTarget='#'
						heading='The Hidden Mystery Behind Design Tokens'
						paragraph='Our culture is dominated by efforts to score points and win arguments. But do we really talk anymore?'
						linkTarget='http://bitgrip.com'
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
