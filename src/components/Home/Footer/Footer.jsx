import React from 'react';
import Image from "next/image";
import logo from "../../../../public/footerLogo.png";

const Footer = () => {
  return (
    <div className='bg-green py-[36px]'>
      <div className='flex justify-center align-center mb-[76px]'>
        <Image src={logo} width={137} height={137}/>
      </div>      
      <div className='flex my-[30px] align-center justify-center'>
        <span className='font-montserrat text-bd-rg mx-[64px]'>Join ReactdevsKe</span>        
        <span className='font-montserrat text-bd-rg mx-[64px]'>Contact us</span>        
        <span className='font-montserrat text-bd-rg mx-[64px]'>Privacy Policy</span>        
      </div>      
    </div>
  )
}

export default Footer;