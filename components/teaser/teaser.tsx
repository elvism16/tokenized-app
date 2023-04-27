import * as React from "react";
import Heading from "../heading/heading";

type Type = "default" | "reverse";

export interface TeaserProps {
	type?: Type;
	headline: string;
	byline: string;
	kicker: string;
	btnLabel?: string;
	imgSrc?: string;
	imgAlt?: string;
}

export const Teaser: React.FC<TeaserProps> = ({
	type = "default",
	imgSrc,
	imgAlt,
	headline,
	byline,
	kicker,
}: TeaserProps) => {
	return (
		<div className={`teaser teaser--${type}`}>
			<div className='teaser__outer-wrapper'>
				<div className='teaser__wrapper'>
					<div className='teaser__header'>
						<div className='teaser__kicker'>{kicker}</div>
						<Heading as='h3' className='teaser__headline'>
							{headline}
						</Heading>
					</div>
					<p className='teaser__byline'>{byline}</p>
					<div className='teaser__media'>
						{imgSrc && (
							<img className='teaser__image' src={imgSrc} alt={imgAlt} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Teaser;
