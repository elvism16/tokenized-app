import * as React from 'react';
import Button from "../button/button";
export interface HeroProps {
  imgSrc?: string;
  imgAlt?: string;
}

// todo: if image change grid / grid via tokens / css for grid variants

export const Hero: React.FC<HeroProps> = ({
  imgSrc,
  imgAlt,
}: HeroProps) => {
  return (
    <div className="hero">
      <div className="hero__grid">
        <div className="hero__content">
          <h1 className="hero__headline">
          Design<span> Tokenized</span>
          </h1>
          <div className="btn-group">
            <Button
              type='primary'
              target='http://bitgrip.com'
              onClick={() => console.log("You clicked the button!")}
            >Get it</Button>
            <Button
              target='http://bitgrip.com'
              onClick={() => console.log("You clicked the button!")}
            >Try again</Button>
          </div>
        </div>
        {imgSrc && <img className="hero__image" src={imgSrc} alt={imgAlt} />}
      </div>
    </div>
  );
};

export default Hero;