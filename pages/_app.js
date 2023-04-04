import "../build/css/_variables.css";
import "../styles/_reset.css";
import "../styles/globals.css";
import "../styles/section.component.css";
import "../styles/hero.component.css";
import "../styles/button.component.css";

export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
