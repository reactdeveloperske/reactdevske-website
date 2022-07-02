import React from 'react';
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/footerLogo.png";
import { CONTACT, PRIVACYPOLICY } from '../../../util/routeConstants';

const Footer = () => {
  return (
    <div className='bg-green py-[36px]'>
      <div className='flex justify-center align-center mb-[76px]'>
        <Image src={logo} width={137} height={137}/>
      </div>      
      <div className='flex my-[30px] align-center justify-center'>
        <Link href="https://bit.ly/joinreactdevske">
          <span className='font-montserrat text-bd-rg mx-[64px] cursor-pointer'>Join Reactdevske</span>
        </Link>
        <Link href={CONTACT}>
          <span className='font-montserrat text-bd-rg mx-[64px] cursor-pointer'>Contact us</span>
        </Link>        
        <Link href={PRIVACYPOLICY}>
          <span className='font-montserrat text-bd-rg mx-[64px] cursor-pointer'>Privacy policy</span>
        </Link>
      </div>      
    </div>
  )
}

export default Footer;