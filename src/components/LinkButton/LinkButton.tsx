import React from 'react';

type LinkButtonProps = React.ComponentProps<'a'>;

const LinkButton: React.FC<LinkButtonProps> = ({ children, ...props }) => {
  return (
    <a
      className="p-4 px-8 text-white font-bold bg-red-600 rounded-sm block w-[200px] overflow-hidden whitespace-nowrap text-ellipsis text-center"
      {...props}
    >
      {children}
    </a>
  );
};

export default LinkButton;
