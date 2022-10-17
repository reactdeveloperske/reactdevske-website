import React from 'react';
import Image from 'next/image';

import logo from "../../../public/img/logo.png";


const Logo = ({ size }) => {
  return (
    <div className='animate-spin'>
      <Image src={logo} alt="logo" width={size} />
    </div>
  );
};
export default Logo;
