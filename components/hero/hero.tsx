import * as React from 'react';
import Button from "../button/button";
export interface HeroProps {
  imgSrc?: string;
  imgAlt?: string;
  byline?: string;
  headline?: string;
  btnLabelPrimary?: string
  btnLabelSecondary?: string
}

// todo: if image change grid / grid via tokens / css for grid variants

export const Hero: React.FC<HeroProps> = ({
  imgSrc,
  imgAlt,
  headline,
  byline,
  btnLabelPrimary,
  btnLabelSecondary
}: HeroProps) => {
  return (
    <div className="hero">
      <div className={`hero__grid ${imgSrc ? "hero__grid--has-image" : ""}`}>
        <div className="hero__content">
          <h1 className="hero__headline">
            {headline}
          </h1>
          {byline && <p className="hero__byline">{byline}</p>}
          <div className="btn-group">
            {btnLabelPrimary && <Button
              type='primary'
              target='/article'
              onClick={() => console.log("You clicked the button!")}
            >{btnLabelPrimary}</Button>}
            {btnLabelSecondary && <Button
              target='/article'
              onClick={() => console.log("You clicked the button!")}
            >{btnLabelSecondary}</Button>}
          </div>
        </div>
        {imgSrc && <img className="hero__image" src={imgSrc} alt={imgAlt} />}
      </div>
    </div>
  );
};

export default Hero;