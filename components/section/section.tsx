import * as React from 'react';
import Heading from '../heading/heading';

type Type = 'hero' | 'page';

export interface SectionProps {
  type?: Type;
  heading: string;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  children,
  heading,
  type = 'page'
}: SectionProps) => {
  return (
    <section className={`section section__${type}`}>
      <div className="container">
        {heading && <Heading className='section__heading' as='h2'>{heading}</Heading>}
        {children}
      </div>
    </section>
  );
};

export default Section;