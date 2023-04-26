import * as React from 'react';
import Heading from '../heading/heading';

export interface CardProps {
  catTarget?: string;
  linkTarget: string;
  heading: string;
  paragraph?: string;
  imgSrc: string;
  category: string;
}

export const Card: React.FC<CardProps> = ({
  catTarget,
  heading,
  paragraph,
  imgSrc,
  category,
  linkTarget
}: CardProps) => {
  return (
    <div className={`card ${category ? "card__blog" : ""}`}>
      <div className="card__wrapper">
        {imgSrc && <div className="card__media">
          <a href={linkTarget} rel="bookmark">
            <img className="card__image" src={imgSrc} alt="Image of buildings in Bryggen in the city of Bergen in Norway" />
          </a>
        </div>}
        <div className="card__body">
          <div className="card__body-wrap">
            {category && <a href={catTarget} className="card__category">{category}</a>}
            <Heading as="h3" className="card__headline"><a href={linkTarget} rel="bookmark">{heading}</a></Heading>
            {paragraph && <p className="card__text">{paragraph}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;