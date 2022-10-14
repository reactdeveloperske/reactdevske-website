import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  name: string;
}

const Button: React.FC<ButtonProps> = ({ children, name, ...props }) => {
  return (
    <>
      <button
        type="button"
        name={name}
        {...props}
        className="p-4 px-8 text-white font-bold bg-red-600 rounded"
        style={{
          display: 'block',
          width: '200px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          textAlign: 'center',
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
