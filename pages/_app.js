import "../build/css/_variables.css";
import "../styles/_reset.css";
import "../styles/globals.css";
import "../styles/header.css";
import "../styles/article.css";
import "../styles/navigation.component.css";
import "../styles/section.component.css";
import "../styles/hero.component.css";
import "../styles/notification.component.css";
import "../styles/button.component.css";
import "../styles/card.component.css";

export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
