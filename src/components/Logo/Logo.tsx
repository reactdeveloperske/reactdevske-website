import React from 'react';
import Image from 'next/image';
import logo from '../../../public/img/logo.png';

type logoType = {
    logoSize: number;
}

export default function Logo({logoSize}:logoType ) {

    return (
        <div className='animate-spin'>
            <Image src={logo} alt="logo" width ={logoSize} />
        </div>
    );
}
