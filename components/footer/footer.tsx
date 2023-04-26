import * as React from 'react';

export interface FooterProps {
  children?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({
  children,
}: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <ul className="footer__nav">
          <li className="footer__nav-item"><a href="/">Home</a></li>
          <li className="footer__nav-item"><a href="/article">Contact</a></li>
          <li className="footer__nav-item"><a href="/article">Careers</a></li>
          <li className="footer__nav-item"><a href="/article">Help Center</a></li>
          <li className="footer__nav-item"><a href="/article">Privacy</a></li>
          <li className="footer__nav-item"><a href="/article">Terms of use</a></li>
        </ul>
      </div>
      {children}
    </footer>
  );
};

export default Footer;