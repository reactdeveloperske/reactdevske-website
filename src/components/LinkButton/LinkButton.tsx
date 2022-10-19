import React from 'react';

type LinkButtonProps = React.Component<'a'>;

const LinkButton: React.FC<LinkButtonProps> = ({ children, ...props }) => {
  return (
    <a
      className="p-4 px-8 text-white font-bold bg-red-600 rounded block w-[200px] overflow-hidden whitespace-nowrap overflow-ellipsis text-center"
      {...props}
    >
      {children}
    </a>
  );
};

export default LinkButton;
