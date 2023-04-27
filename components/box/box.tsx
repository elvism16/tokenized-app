import * as React from "react";
import Button from "../button/button";

type Type = "light" | "dark";

export interface BoxProps {
	type?: Type;
	btnLabel?: string;
	title?: string;
	price?: string;
	description?: string;
}

export const Box: React.FC<BoxProps> = ({
	type = "light",
	btnLabel,
	title,
	price,
	description,
}: BoxProps) => {
	return (
		<div className={`box box--${type}`}>
			<div className='box__content'>
				<p className='box__title'>{title}</p>
				<p className='box__description'>{description}</p>
				<div className='box__price'>{price}</div>
			</div>
			<div className='box__specs'></div>
			<Button target='/article'>{btnLabel}</Button>
		</div>
	);
};

export default Box;
