import React from 'react';

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  children: React.ReactNode;
  to: string;
}

const LinkButton: React.FC<LinkProps> = ({ to, children, ...props }) => {
  return (
    <>
      <a
        href={to}
        {...props}
        className="p-2"
        style={{
          width: '100px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          textAlign: 'center',
        }}
      >
        {children}
      </a>
    </>
  );
};

export default LinkButton;
