import * as React from 'react';

type Type = 'primary' | 'secondary';


interface Props {
  type?: Type;
  children?: React.ReactNode;
  onClick: () => void;
  target?: string;
}

const Button: React.FC<Props> = ({ 
    children,
    onClick, 
    type = 'secondary',
    target
  }) => { 
  return (
    <>
    {target ? (
      <a href={target} className={`btn btn--${type}`} onClick={onClick}>
        {children}
      </a>
    ) : (
      <button className={`btn btn--${type}`} onClick={onClick}>
        {children}
      </button>
    )}
    </>
  );
}

export default Button;
