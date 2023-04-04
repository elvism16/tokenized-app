import * as React from 'react';
import { useState } from 'react';


export interface MainNavProps {
  children?: React.ReactNode;
}

export const MainNav: React.FC<MainNavProps> = ({
  children,
}: MainNavProps) => {
  const [isActive, setActive] = useState(false);

  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="nav__wrapper">
      <button className={`menu-button is-${isActive ? "open" : "closed"}`} onClick={ToggleClass}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          width="48px"
          height="48px"
          className="icon"
        >
          <path
            d="M64,6c31.98,0,58,26.02,58,58s-26.02,58-58,58S6,95.98,6,64,32.02,6,64,6m0-6C28.65,0,0,28.65,0,64s28.65,64,64,64,64-28.65,64-64S99.35,0,64,0h0Z"
          />
          <path
            className="path02"
            d="M96,67H32c-1.66,0-3-1.34-3-3s1.34-3,3-3H96c1.66,0,3,1.34,3,3s-1.34,3-3,3Z"
          />
          <path
            className="path03"
            d="M96,88H32c-1.66,0-3-1.34-3-3s1.34-3,3-3H96c1.66,0,3,1.34,3,3s-1.34,3-3,3Z"
          />
          <path
            className="path01"
            d="M96,46H32c-1.66,0-3-1.34-3-3s1.34-3,3-3H96c1.66,0,3,1.34,3,3s-1.34,3-3,3Z"
          />
        </svg>
        <span className="sr-only">Open the menu</span>
      </button>
      <nav className={`main-nav main-nav--${isActive ? "active" : "hidden"}`}>
        <ul className="main-nav__list">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/article">What are Design Tokens</a></li>
          <li className="nav-item"><a href="#" >Design Token Types</a></li>
          <li className="nav-item"><a href="#">Blog</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
