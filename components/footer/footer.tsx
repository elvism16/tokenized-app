import * as React from 'react';

export interface FooterProps {
  children?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({
  children,
}: FooterProps) => {
  return (
    <footer className="footer">
      The Footer
      {children}
    </footer>
  );
};

export default Footer;