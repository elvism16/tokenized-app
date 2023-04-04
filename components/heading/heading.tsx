import * as React from 'react';
import { HTMLAttributes, FC } from 'react';

type ElementType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface HeadingProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  children?: React.ReactNode;
}

const Heading: FC<HeadingProps> = ({ as: Tag = 'div', ...otherProps }) => {
  return <Tag {...otherProps} />;
};

export default Heading;